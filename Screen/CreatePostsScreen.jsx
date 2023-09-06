import { React, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DeleteSvg } from "./components/svg/DeleteSvg";

import { CameraSvg } from "./components/svg/CameraSvg";
import { MapPin } from "./components/svg/MapSvg";

import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts } from "./redux/selectors";
import { addPost } from "./redux/postSlice";


import { collection, addDoc, doc} from "firebase/firestore";
import { db, auth } from "../config";


export const CreatePosts = ({ navigation }) => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photoUri, setPhotoUri] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [locationName, setLocationName] = useState("");
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);



  const writeDataToFirestore = async (newPost) => {
    const userId = auth.currentUser.uid;
    
   try {
     await addDoc(collection(db, "user", userId, "posts"), newPost);
   } catch (e) {
     console.error("Error adding document: ", e);
     throw e;
   }



  }



  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let locationData = await Location.getCurrentPositionAsync({});

      const coords = {
        latitude: locationData.coords.latitude,
        longitude: locationData.coords.longitude,
      };
      setLocation({
        latitude: locationData.coords.latitude,
        longitude: locationData.coords.longitude,
      });
    })();
  }, []);

  const onPublish = (e) => {
    e.preventDefault();

    setLoading(true);
  
    const newPost = {
      name: photoName,
      uri: photoUri,
      country: locationName,
      coords: location,
      likes: 0
    };
    writeDataToFirestore(newPost);

     dispatch(addPost({ photoName, photoUri, location, locationName }));

     navigation.navigate("Posts");
     setPhotoName("");
     setLocationName("");
     setPhotoUri("");
     setLocation({});
     setLoading(false);
         

  };

  return (
    // <SafeAreaView
    //   style={{...styles.safe, backgroundColor:'#000'} }
    //   edges={["right", "left", "bottom", "top"]}>
    <View style={styles.container}>
      {photoUri ? (
        <View>
          <Image
            source={{ uri: photoUri }}
            style={{ width: "100%", height: 220 }}
          />
        </View>
      ) : (
        <Camera type={type} ref={setCamera}>
          <View style={styles.imageWrapper}>
            <TouchableOpacity
              style={styles.flip}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{ fontSize: 18, color: "white" }}>Flip</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.logoBgc}
              onPress={async () => {
                if (camera) {
                  const { uri } = await camera.takePictureAsync();
                  await MediaLibrary.createAssetAsync(uri);
                  setPhotoUri(uri);
                }
              }}>
              <CameraSvg />
            </TouchableOpacity>
          </View>
        </Camera>
      )}

      {photoUri ? (
        <Text style={styles.text}>Редагувати фото</Text>
      ) : (
        <Text style={styles.text}>Завантажте фото</Text>
      )}
      <TextInput
        style={styles.inputNameText}
        placeholder={"Назва..."}
        placeholderTextColor={"#BDBDBD"}
        inputMode={"text"}
        onChangeText={(e) => setPhotoName(e)}
        value={photoName}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 50,
          marginBottom: 32,
        }}>
        <MapPin
          style={{
            position: "absolute",
            left: 0,
          }}
        />
        <TextInput
          style={styles.inputLocation}
          placeholder={"Місцевість..."}
          placeholderTextColor={"#BDBDBD"}
          inputMode={"text"}
          onChangeText={(e) => setLocationName(e)}
          value={locationName}
        />
      </View>

      {loading ? (
        <TouchableOpacity
          style={styles.button}
          title="Зареєстуватися">
          <Text style={styles.buttonText}>Loading...</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          title="Зареєстуватися"
          onPress={onPublish}>
          <Text style={styles.buttonText}>Опубліковати</Text>
        </TouchableOpacity>
      )}

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          title="Delete"
          onPress={() => {
            setPhotoName("");
            setLocationName("");
            setPhotoUri(null);
          }}>
          <DeleteSvg />
        </TouchableOpacity>
      </View>
    </View>
    //  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { width: "100%", flex: 1, backgroundColor: "#c4c4c4" },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 32,
  },

  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 220,
  },
  flip: {
    position: "absolute",
    left: 10,
    top: 10,
    margin: 0,
    padding: 0,
  },

  logoBgc: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
    lineHeight: 18.75,
    color: "#BDBDBD",
    marginBottom: 32,
    marginTop: 8,
  },
  inputNameText: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingVertical: 16,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 18.75,
  },
  inputLocation: {
    flex: 1,
    position: "relative",
    paddingLeft: 28,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingVertical: 16,
    fontSize: 16,
    lineHeight: 18.75,
  },

  button: {
    paddingHorizontal: 23,
    paddingVertical: 16,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
    backgroundColor: "#F6F6F6",
    marginTop: 6,
    marginBottom: 12,
  },
  buttonText: {
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
  },
  footer: {
    marginHorizontal: 16,
    width: "100%",
    position: "absolute",
    bottom: 0,

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 16,
  }
});

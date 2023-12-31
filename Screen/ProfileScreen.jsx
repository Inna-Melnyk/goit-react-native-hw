import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { LogOutImage } from "./components/svg/LogOutImageSvg";
import { ScreenBackground } from "./components/ScreenBackground";

import { ProfilePost } from "./components/ProfilePost";
import { CloseSvg } from "./components/svg/CloseSvg";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts } from "./redux/selectors";

import { logOut } from "./redux/authSlice";
import { auth } from "../config";
import { signOut } from "firebase/auth";

export const ProfileScreen = ({ navigation }) => {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  // const userName = auth.currentUser.displayName;

  // console.log("data =>", data);

  dispatch(logOut());
  return (
    <ScreenBackground>
      <View style={styles.wrapper}>
        <TouchableOpacity style={{ position: "absolute", right: 16, top: 22 }}>
          <LogOutImage
            onPress={() =>
              auth
                .signOut()
                .then(() => {
                  dispatch(logOut());
                  navigation.navigate("Login");
                })
                .catch((error) => {
                  alert(error.message);
                })
            }
          />
        </TouchableOpacity>
        <View style={styles.photoWrapper}>
          <Image source={require("../assets/images/user120x120.png")} />
          <TouchableOpacity style={styles.deletePhotoButton}>
            <CloseSvg />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{auth.currentUser.displayName}</Text>
        <ScrollView>
          <View>
            {posts.map(
              ({ id, uri, name, comments, country, likes, coords }) => (
                <ProfilePost
                  image={uri}
                  name={name}
                  comments={comments}
                  country={country}
                  likes={likes}
                  key={id}
                  location={coords}
                />
              )
            )}
          </View>
          {/* <ProfilePost
            way={require("../assets/images/forest.jpg")}
            name={"Ліс"}
            commentsNumber={8}
            country={"Ukraine"}
            likes={153}
          />
          <ProfilePost
            way={require("../assets/images/sunset.jpg")}
            name={"Захід на Чорному морі"}
            commentsNumber={2}
            country={"Ukraine"}
            likes={200}
          />
          <ProfilePost
            way={require("../assets/images/old-house.jpg")}
            name={"Старий будиночок у Венеції"}
            commentsNumber={50}
            country={"Italy"}
            likes={200}
          /> */}
        </ScrollView>
      </View>
    </ScreenBackground>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 32,
  },

  wrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    height: "80%",
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignContent: "flex-end",
  },
  photoWrapper: {
    width: 120,
    height: 120,
    position: "absolute",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
    left: "55%",
    transform: [{ translateX: -60 }],
    resizeMode: "cover",
  },
  deletePhotoButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    borderColor: "#E8E8E8",
    backgroundColor: "white",
    borderRadius: 12.5,
    borderWidth: 1,
    top: 81,
    right: -12.5,
  },
  text: {
    marginTop: 92,
    marginBottom: 32,
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35.16,
    color: "#212121",
  },

  imageContainer: {
    position: "absolute",
    top: "-50%",
    left: "50%",
    transform: [{ translateX: -50 }],

    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 25,
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    width: "100%",
    height: 220,
    marginBottom: 8,
  },
  infoWrapper: {
    flexDirection: "row",
    gap: 24,
  },
});

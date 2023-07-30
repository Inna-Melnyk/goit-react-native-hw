import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,

  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DeleteSvg } from "./components/svg/DeleteSvg";

import { Camera } from "./components/svg/CameraSvg";
import { MapPin } from "./components/svg/MapSvg";

export const CreatePosts = () => {
  return (
    // <SafeAreaView
    //   style={{...styles.safe, backgroundColor:'#000'} }
    //   edges={["right", "left", "bottom", "top"]}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <View style={styles.logoBgc}>
            <Camera />
          </View>
        </View>

        <Text
          style={styles.text}>
          Завантажте фото
        </Text>

        <TextInput
          style={styles.inputNameText}
          placeholder={"Назва..."}
          placeholderTextColor={"#BDBDBD"}
          inputMode={"text"}
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
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          title="Зареєстуватися"
          //   onPress={onRegister}
        >
          <Text style={styles.buttonText}>Опубліковати</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            title="Delete"
            onPress={() => null}>
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
  },

  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    width: "100%",
    height: 220,
    marginTop: 32,
    marginBottom: 8,
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
    // backgroundColor: "#FF6C00",
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
  },
});

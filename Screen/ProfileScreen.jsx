
// import { Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { StyleSheet, View} from "react-native";


// export const ProfileScreen = (navigator) => {
//   return (
//     <SafeAreaView
//       style={styles.safe}
//       edges={["right", "left", "bottom", "top"]}>
//       <View style={{flex:1, backgroundColor: 'white'}}>

//         <Text>PROFILE SCREEN</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safe: { width: "100%", flex: 1 },
 
// });

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
} from "react-native";
import AddImage from "./components/svg/AddImageSvg";
import { LogOutImage } from "./components/svg/LogOutImageSvg";
import { ScreenBackground } from "./components/ScreenBackground";
import { Input } from "./components/Input";

import { StatusBar } from "react-native";

export const ProfileScreen = ({navigation} ) => {
  console.log(navigation);



    return (
      
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ScreenBackground>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}>
              <View style={styles.inner}>
                <View
                  style={{
                    ...styles.background,
                    // paddingBottom: isOpenKeyboard ? 78 : 20,
                  }}>
                  <TouchableOpacity
                    style={{ marginLeft: "auto", marginBottom: 46 }}
                    onPress={() => navigation.navigate("Registration")}>
                    <LogOutImage />
                  </TouchableOpacity>

                  <View style={styles.imageContainer}>
                    <AddImage style={styles.svg} />
                  </View>

                  <Text style={styles.text}>Natali Romanova</Text>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScreenBackground>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
            
    
    );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inner: {
    flex: 1,
    justifyContent: "space-around",
  },

  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  background: {
    position: "relative",
    backgroundColor: "#ffffff",
    marginTop: "auto",
    paddingTop: 22,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  text: {
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 32,
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
  input: {
    marginBottom: 12,
    height: 42,
    borderWidth: 1,
    padding: 14,
    backgroundColor: "#F6F6F6",
    color: "#000",
    borderColor: "#E8E8E8",
  },
  button: {
    padding: 16,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
    marginTop: 6,
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff9f9",
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",
  },
  info: {
    textAlign: "center",
    fontSize: 14,
    color: "#1B4371",
  },

  svg: {
    position: "absolute",
    bottom: 14,
    right: -15,
  },
  underline: {
    textDecorationLine: "underline",
  },
});

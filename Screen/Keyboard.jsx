import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Keyboard,
} from "react-native";
import { ScreenBackground } from "./components/ScreenBackground";
import AddImage from "./components/svg/AddImageSvg";

const KeyboardAvoidingComponent = () => {
  return (
    <ScreenBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.background}>
            <View style={styles.imageContainer}>
              <AddImage style={styles.svg} />
            </View>

            <Text style={styles.text}>Реєстрація</Text>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
            />
            <TouchableOpacity
              style={styles.button}
              title="Зареєстуватися"
              onPress={() => null}>
              <Text style={styles.buttonText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <Text style={styles.info}>
              Вже є акаунт?
              <Text style={styles.underline}>Увійти</Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScreenBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  background: {
    position: "relative",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    marginTop: "auto",
    paddingTop: 78,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  text: {
    color: "#212121",
    fontSize: 32,
    lineHeight: 35,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 22,
  },

  imageContainer: {
    position: "absolute",
    top: "-15%",
    left: "50%",
    transform: [{ translateX: -50 }],

    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 25,
  },
  input: {
    marginBottom: 12,
    height: 46,
    borderWidth: 1,
    padding: 14,
    backgroundColor: "#F6F6F6",
    color: "#000",
    borderColor: "#E8E8E8",
  },
  button: {
    padding: 18,
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

export default KeyboardAvoidingComponent;

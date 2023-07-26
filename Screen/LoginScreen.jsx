import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import AddImage from "./components/svg/AddImageSvg";
import { StatusBar } from "expo-status-bar";
import { ScreenBackground } from "./components/ScreenBackground";
import { Input } from "./components/Input";

export const LoginScreen = () => {
  return (
    <ScreenBackground>
      <View style={styles.background}>
        <Text style={styles.text}>Увійти</Text>
        <Input
          placeholder={"Адреса електронної пошти"}
          placeholderTextColor={"#BDBDBD"}
          inputMode={"email"}
        />
        <Input placeholder={"Пароль"} placeholderTextColor={"#BDBDBD"} />
        <TouchableOpacity style={styles.button} title="Зареєстуватися">
          <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>
        <Text style={styles.info}>
          Немає акаунту? <Text style={styles.underline}>Зареєструватися</Text>
        </Text>
      </View>
    </ScreenBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    position: "relative",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    marginTop: "auto",
    paddingTop: 30,
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
    marginBottom: 30,
  },
  input: {
    marginBottom: 15,
    height: 46,
    borderWidth: 1,
    padding: 16,
    backgroundColor: "#F6F6F6",
    color: "#000",
    borderColor: "#E8E8E8",
  },
  button: {
    padding: 18,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
    marginTop: 26,
    marginBottom: 16,
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

  underline: {
    textDecorationLine: "underline",
  },
});

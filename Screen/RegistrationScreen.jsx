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
import { ScreenBackground } from "./components/ScreenBackground";
import { Input } from "./components/Input";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);


  const navigation = useNavigation();

  const onRegister = () => {
    console.log({ login: login, email: email, password: password });
    navigation.navigate("Home");
    reset();
  };

  const reset = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };
  // const onKeyboard = (keyboardStatus) => {
  //   return setIsOpenKeyboard(keyboardStatus)
  // }

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
                  <View style={styles.imageContainer}>
                    <AddImage style={styles.svg} />
                  </View>

                  <Text style={styles.text}>Реєстрація</Text>
                  <Input
                    placeholder={"Логін"}
                    placeholderTextColor={"#BDBDBD"}
                    inputMode={"text"}
                    onChange={setLogin}
                    value={login}
                    // isOpenKeyboard={onKeyboard}
                  />
                  <Input
                    placeholder={"Адреса електронної пошти"}
                    placeholderTextColor={"#BDBDBD"}
                    inputMode={"email"}
                    onChange={setEmail}
                    value={email}
                    // isOpenKeyboard={onKeyboard}
                  />

                  <Input
                    placeholder={"Пароль"}
                    placeholderTextColor={"#BDBDBD"}
                    onChange={setPassword}
                    value={password}
                    secureTextEntry={true}
                    // isOpenKeyboard={onKeyboard}
                  />
                  <TouchableOpacity
                    style={styles.button}
                    title="Зареєстуватися"
                    onPress={onRegister}>
                    <Text style={styles.buttonText}>Зареєстуватися</Text>
                  </TouchableOpacity>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      gap: 2,
                    }}>
                    <Text style={styles.info}>Вже є акаунт? </Text>

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Login")}>
                      <Text style={[styles.info, styles.underline]}>
                        Увійти
                      </Text>
                    </TouchableOpacity>
                  </View>
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
  safe: { width: "100%", flex: 1, backgroundColor:'#c4c4c4' },

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
    paddingTop: 83,
    paddingLeft: 15,
    paddingRight: 15,
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
    marginBottom: 18,
  },

  imageContainer: {
    position: "absolute",
    top: "-18%",
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

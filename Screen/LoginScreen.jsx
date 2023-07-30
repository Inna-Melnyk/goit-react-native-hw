import { React, useState } from "react";
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
} from "react-native";

import { ScreenBackground } from "./components/ScreenBackground";
import { Input } from "./components/Input";
import { StatusBar } from "react-native";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  const navigation = useNavigation();

  const onLogin = () => {
    console.log({ email: email, password: password });
    navigation.navigate("Home");
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  // const onKeyboard = (keyboardStatus) => {
  //   return setIsOpenKeyboard(keyboardStatus);
  // };

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
                <Text style={styles.text}>Увійти</Text>
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
                  onPress={onLogin}>
                  <Text style={styles.buttonText}>Увійти</Text>
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 2,
                  }}>
                  <Text style={styles.info}>Вже є акаунт? </Text>

                  <TouchableOpacity
                    onPress={() => navigation.navigate("Registration")}>
                    <Text style={[styles.info, styles.underline]}>
                      Зареєструватися
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

    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={styles.container}>
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //     <View style={styles.inner}>
    //       <ScreenBackground>
    //         <View style={styles.background}>
    //           <Text style={styles.text}>Увійти</Text>
    //           <Input
    //             placeholder={"Адреса електронної пошти"}
    //             placeholderTextColor={"#BDBDBD"}
    //             inputMode={"email"}
    //             onChange={setEmail}
    //             value={email}
    //             isOpenKeyboard={onKeyboard}
    //           />
    //           <Input
    //             placeholder={"Пароль"}
    //             placeholderTextColor={"#BDBDBD"}
    //             onChange={setPassword}
    //             value={password}
    //             secureTextEntry={true}
    //             isOpenKeyboard={onKeyboard}
    //           />
    //           <TouchableOpacity
    //             style={styles.button}
    //             title="Зареєстуватися"
    //             onPress={onLogin}>
    //             <Text style={styles.buttonText}>Увійти</Text>
    //           </TouchableOpacity>

    //           <View
    //             style={{
    //               flexDirection: "row",
    //               justifyContent: "center",
    //               gap: 2,
    //             }}>
    //             <Text style={styles.info}>Вже є акаунт? </Text>

    //             <TouchableOpacity
    //               onPress={() => navigation.navigate("Registration")}>
    //               <Text style={[styles.info, styles.underline]}>
    //                 Зареєструватися
    //               </Text>
    //             </TouchableOpacity>
    //           </View>
    //         </View>
    //       </ScreenBackground>
    //     </View>
    //   </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "space-around",
  },
  background: {
    position: "relative",
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

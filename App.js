import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
 
} from "react-native";
import { RegistrationScreen } from "./Screen/RegistrationScreen";
import { LoginScreen } from "./Screen/LoginScreen";
import { PostsScreen } from "./Screen/PostsScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
        {/* <PostsScreen /> */}
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0ece2",
  },
});

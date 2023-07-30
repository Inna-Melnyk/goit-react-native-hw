import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import { RegistrationScreen } from "./Screen/RegistrationScreen";
import { LoginScreen } from "./Screen/LoginScreen";
import { Home } from "./Screen/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";


import { CreatePosts } from "./Screen/CreatePostsScreen";
import { PostsScreen } from "./Screen/PostsScreen";


const MainStack = createStackNavigator();

export default function App() {
  return (
     <NavigationContainer >
        <MainStack.Navigator initialRouteName="Registration">
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safe: { width: "100%", flex: 1 },
  container: {
    flex: 1,
  },
});

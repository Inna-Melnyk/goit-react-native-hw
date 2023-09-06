import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, TouchableOpacity, Button } from "react-native";
import { RegistrationScreen } from "./Screen/RegistrationScreen";
import { LoginScreen } from "./Screen/LoginScreen";
import { Home } from "./Screen/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { BackButton } from "./Screen/components/svg/BackButton";

import { CreatePosts } from "./Screen/CreatePostsScreen";
import { PostsScreen } from "./Screen/PostsScreen";
import { CommentsScreen } from "./Screen/CommentsScreen";
import { MapScreen } from "./Screen/MapScreen";

import { Provider } from "react-redux";
import { store, persistor } from "./Screen/redux/store";
import { PersistGate } from "redux-persist/integration/react";

// import { useNavigation } from "@react-navigation/native";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <NavigationContainer>
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

            <MainStack.Screen
              name="Comments"
              component={CommentsScreen}
              options={({ navigation }) => ({
                headerTitle: "Коментарі",

                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Posts");
                    }}>
                    <BackButton style={{ marginLeft: 16 }} />
                  </TouchableOpacity>
                ),
                headerStyle: {
                  borderBottomWidth: 1,
                  backgroundColor: "white",
                },
              })}
            />

            <MainStack.Screen
              name="Map"
              component={MapScreen}
              options={({ navigation }) => ({
                title: "Мапа",

                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Home");
                    }}>
                    <BackButton style={{ marginLeft: 16 }} />
                  </TouchableOpacity>
                ),
                headerStyle: {
                  borderBottomWidth: 1,
                  backgroundColor: "white",
                },
              })}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  safe: { width: "100%", flex: 1 },
  container: {
    flex: 1,
  },
});

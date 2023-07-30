import { React } from "react";
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Image,
//   Platform,
//   Keyboard,
//   TouchableWithoutFeedback,
//   KeyboardAvoidingView,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { LogOutImage } from "./components/svg/LogOutImageSvg";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import Img from "../assets/images/user-photo.jpg";
import { MenuSvg } from "./components/svg/MenuSvg";
import { UserSvg } from "./components/svg/User";
import { PlusSvg } from "./components/svg/PlusSvg";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { PostsScreen } from "./PostsScreen";
import { CreatePosts } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { BackButton } from "./components/svg/BackButton";
import { LogOutImage } from "./components/svg/LogOutImageSvg";

import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export const Home = (props) => {
  const { navigation } = props;

  return (
    <SafeAreaView
      style={styles.safe}
      edges={["right", "left", "bottom", "top"]}>
      <Tab.Navigator
        initialRouteName="Posts"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "Posts") {
              return <MenuSvg stroke={focused ? "#FF6C00" : "#000"} />;
            } else if (route.name === "Create Post") {
              return (
                <View style={styles.button} title="Add">
                  <PlusSvg />
                </View>
              );
            } else if (route.name === "Profile") {
              return (
                <View>
                  <UserSvg stroke={focused ? "#FF6C00" : "#000"} />
                </View>
              );
            }
          },
          tabBarStyle: styles.footer,
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            title: "Публікації",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
                <LogOutImage style={{ marginRight: 16 }} />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
            
          }}
        />
        <Tab.Screen
          name="Create Post"
          component={CreatePosts}
          options={{
            title: "Створити публікацію",
            tabBarStyle: { display: "none" },

            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
                <BackButton style={{ marginLeft: 16 }} />
              </TouchableOpacity>
            ),
            headerStyle: {
              borderBottomWidth: 1,
              backgroundColor: "white",
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          navigation={navigation}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { width: "100%", flex: 1, backgroundColor: "#000" },
  header: {},
  button: {
    width: 70,
    paddingVertical: 13.5,
    paddingHorizontal: 28.5,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
  },
  footer: {
    // backgroundColor: "white",
    // width: "100%",
    // position: "absolute",
    // bottom: 0,
    // flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-around",
    // alignItems: "center",
    // borderTopWidth: 1,
    // borderTopColor: "rgba(0, 0, 0, 0.3)",

    height: 83,
    paddingTop: 9,
    paddingBottom: 22,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  focusedIconWrapper: {
    fill: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
//   safe: { width: "100%", flex: 1 },
//   container: {
//     flex: 1,
//     width: "100%",
//     backgroundColor: "#fff",
//   },
//   scrollView: {
//     // backgroundColor: "pink",
//     // marginBottom: 80,
//   },
//   header: {
//     borderBottomWidth: 1,
//     borderBottomColor: "rgba(0, 0, 0, 0.3)",
//   },

//   text: {
//     position: "relative",
//     padding: 11,
//     fontSize: 16,
//     fontWeight: 500,
//     lineHeight: 22,
//     marginLeft: "auto",
//     marginRight: "auto",
//   },
//   logout: {
//     position: "absolute",
//     top: 11,
//     right: 11,
//   },

//   main: {
//     marginHorizontal: 16,
//     paddingTop: 32,
//     paddingBottom: 80,
//   },
//   avatar: {
//     borderRadius: 16,
//     marginRight: 10,
//   },
//   user: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 14,
//   },

//   footer: {
//     backgroundColor: "white",
//     width: "100%",
//     position: "absolute",
//     bottom: 0,
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     borderTopWidth: 1,
//     borderTopColor: "rgba(0, 0, 0, 0.3)",
//     paddingTop: 12,
//     paddingBottom: 22,
//   },

//   button: {
//     width: 70,
//     paddingVertical: 13.5,
//     paddingHorizontal: 28.5,
//     borderRadius: 25,
//     backgroundColor: "#FF6C00",
//   },
// });

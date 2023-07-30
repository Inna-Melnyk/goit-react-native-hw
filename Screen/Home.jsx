import { React } from "react";
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

const Tab = createBottomTabNavigator();

export const Home = (props) => {
  const { navigation } = props;

  return (
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
            <TouchableOpacity
              onPress={() => navigation.navigate("Registration")}>
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
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    paddingVertical: 13.5,
    paddingHorizontal: 28.5,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
  },
  footer: {
    height: 83,
    paddingTop: 9,
    paddingBottom: 12,
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

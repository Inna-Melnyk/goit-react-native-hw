import { View, Text, FlatList, Image, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { ArrowUp } from "./components/svg/ArrowUp";

export const CommentsScreen = ({ route }) => {
  const { comments, image } = route.params;
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);
  const [comment, setComment] = useState("");



  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View
        style={{
          flex: 1,
          width: "100%",
          paddingHorizontal: 16,
          backgroundColor: "#fff",
          paddingBottom: isOpenKeyboard ? 70 : 16,
        }}>
        <Image
          source={image}
          resizeMode={"cover"}
          style={{
            width: "100%",
            height: 240,
            borderRadius: 8,
            marginVertical: 18,
          }}
        />

        <FlatList
          style={{}}
          data={comments}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                gap: 16,
                marginBottom: 16,
              }}>
              <Image
                source={item.avatar}
                style={{ borderRadius: 50, width: 28, height: 28 }}
              />
              <View
                style={{
                  backgroundColor: "#F6F6F6",
                  borderRadius: 8,
                  padding: 16,
                }}>
                <Text style={{ paddingBottom: 8, paddingRight: 32 }}>
                  {item.text}
                </Text>
                <Text style={{ color: "#BDBDBD" }}>{item.time}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

        <View>
          <TextInput
            onFocus={() => setIsOpenKeyboard(true)}
            onBlur={() => setIsOpenKeyboard(false)}
            value={comment}
            onChangeText={setComment}
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "#F6F6F6",
              borderWidth: 1,
              borderColor: "#E8E8E8",
              paddingLeft: 16,
              paddingRight: 16,
              borderRadius: 25,
              fontSize: 16,
              lineHeight: 19.36,
            }}
            placeholder="Коментувати..."
          />
          <TouchableOpacity
            // onPress={() => handleAddComment(postId, comment)}
            style={{
              position: "absolute",
              right: 8,
              top: 8,
              width: 34,
              height: 34,
              borderRadius: 17,
              backgroundColor: "#FF6C00",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <ArrowUp />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

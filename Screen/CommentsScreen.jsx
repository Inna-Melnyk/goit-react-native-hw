import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import { ArrowUp } from "./components/svg/ArrowUp";
import { db, auth } from "../config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts } from "./redux/selectors";
import { allPosts } from "./redux/postSlice";

export const CommentsScreen = ({ route }) => {
  const { image, postId } = route.params;
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);
  const [comment, setComment] = useState("");
  const [commentsData, setCommentsData] = useState([]);
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  const avatar = require("../assets/images/elipse.jpg");

  console.log(postId);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const userId = auth.currentUser.uid;

    const commentsRef = collection(
      db,
      "user",
      userId,
      "posts",
      postId,
      "comments"
    );

    const commentsSnapshot = await getDocs(commentsRef);
    const comments = commentsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setCommentsData(comments);
    console.log(commentsData);
  };

  const updatePostCommentsCount = () => {
    const updatedPosts = posts.map((post) => ({
      ...post,
      comments: post.comments + 1,
    }));

    dispatch(allPosts(updatedPosts));
  };

  const writeDataToFirestore = async (comment, postId) => {
    const userId = auth.currentUser.uid;
    console.log(comment);
    const timestamp = new Date().toISOString();
    try {
      await addDoc(
        collection(db, "user", userId, "posts", postId, "comments"),
        {
          postId,
          comment,
          timestamp,
          avatar,
        }
      );
      await updatePostCommentsCount();
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  };

  const handleAddComment = async (comment, postId) => {
    console.log(comment);
    writeDataToFirestore(comment, postId);
    getComments();
    setComment("");
  };

  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(timestamp).toLocaleString("uk-UA", options);
  };

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
          source={{ uri: image }}
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
          data={commentsData}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                gap: 16,
                marginBottom: 16,
              }}>
              <Image
                source={avatar}
                style={{ borderRadius: 50, width: 28, height: 28 }}
              />
              <View
                style={{
                  backgroundColor: "#F6F6F6",
                  borderRadius: 8,
                  padding: 16,
                  width: "87%",
                }}>
                <Text style={{ paddingBottom: 8, paddingRight: 32 }}>
                  {item.comment}
                </Text>
                <Text style={{ color: "#BDBDBD" }}>{item.timestamp}</Text>
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
            onPress={() => handleAddComment(comment, postId)}
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

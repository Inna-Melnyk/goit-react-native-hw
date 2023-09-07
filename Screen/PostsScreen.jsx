import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Img from "../assets/images/user-photo.jpg";
import { ProfilePost } from "./components/ProfilePost";

import { useSelector, useDispatch } from "react-redux";
import { selectPosts } from "./redux/selectors";
import { allPosts } from "./redux/postSlice";

import { auth } from "../config";

import {
  collection,
  getDocs,
  onSnapshot,
 } from "firebase/firestore";
import { db } from "../config";
import { firebase } from "firebase/firestore";

export const PostsScreen = (props) => {
  const { navigate } = props.navigation;
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const [postsData, setPostsData] = useState([]);


  const getCommentsNumber = async (postId) => {
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
    const commentsNumber = commentsSnapshot.docs.length;
    return commentsNumber;
  };

  const fetchAndFormatPostsWithCommentsCount = async (posts) => {
    const updatedPosts = [];
    for (const post of posts) {
      const commentCount = await getCommentsNumber(post.id);
      updatedPosts.push({ ...post, comments: commentCount });
    }

    dispatch(allPosts(updatedPosts));
  };

  useEffect(() => {
    const id = auth.currentUser.uid;
    const unsubscribe = onSnapshot(
      collection(db, "user", auth.currentUser.uid, "posts"),
      async (snapshot) => {
        const posts = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          comments: 0,
        }));
        await fetchAndFormatPostsWithCommentsCount(posts);
      }
    );

    return () => unsubscribe();
  }, []);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const posts = useSelector(selectPosts);


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {user && (
          <View style={styles.main}>
            <View style={styles.user}>
              <Image source={Img} style={styles.avatar} />
              <View>
                <Text style={{ fontWeight: 700 }}>
                  {auth.currentUser?.displayName}
                </Text>
                <Text>{auth.currentUser.email}</Text>
              </View>
            </View>

            <View>
              {posts.map(
                ({ id, uri, name, country, likes, coords, comments }) => {
                  return (
                    <ProfilePost
                      id={id}
                      image={uri}
                      name={name}
                      country={country}
                      comments={comments}
                      likes={likes}
                      key={id}
                      location={coords}
                    />
                  );
                }
              )}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  safe: { width: "100%", flex: 1 },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  text: {
    position: "relative",
    padding: 11,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 22,
    marginLeft: "auto",
    marginRight: "auto",
  },
  logout: {
    position: "absolute",
    top: 11,
    right: 11,
  },

  main: {
    marginHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 80,
  },
  avatar: {
    borderRadius: 16,
    marginRight: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },

  footer: {
    backgroundColor: "white",
    width: "100%",
    position: "absolute",
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.3)",
    paddingTop: 12,
    paddingBottom: 22,
  },

  button: {
    width: 70,
    paddingVertical: 13.5,
    paddingHorizontal: 28.5,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
  },
});

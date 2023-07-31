import { Image, StyleSheet, Text } from "react-native";
import { View, TouchableOpacity } from "react-native";
import { MessageSvg } from "./svg/MessageSvg";
import { LikeSvg } from "./svg/LikeSvg";
import { MapPin } from "./svg/MapSvg";
import { useNavigation } from "@react-navigation/native";
import House from '../../assets/images/old-house.jpg'

export const ProfilePost = ({ image, name, country, comments = [], likes }) => {
    const navigation = useNavigation();
    

  const handleCommentsClick = () => {
      navigation.navigate("Comments", { comments: comments });

  };
  return (
    <View style={{ marginBottom: 32 }}>
      <View style={{ marginBottom: 8 }}>
        <Image
          source={image}
          resizeMode={"cover"}
          style={{ width: "100%", height: 240, borderRadius: 8 }}
        />
      </View>
      <Text
        style={{
          marginBottom: 8,
          fontSize: 16,
          lineHeight: 18.75,
          color: "#212121",
        }}>
        {name}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", gap: 24 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <TouchableOpacity onPress={handleCommentsClick}>
              <MessageSvg fill="#FF6C00" stroke="#FF6C00" />
            </TouchableOpacity>
            <Text
              style={[
                styles.text,
                {
                  color: "#212121",
                },
              ]}>
              {comments.length}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <LikeSvg />
            <Text
              style={[
                styles.text,
                {
                  color: "#212121",
                },
              ]}>
              {likes}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <MapPin />
          <Text
            style={[
              styles.text,
              {
                color: "#212121",
                textDecorationLine: "underline",
              },
            ]}>
            {country}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 18.75,
  },
});

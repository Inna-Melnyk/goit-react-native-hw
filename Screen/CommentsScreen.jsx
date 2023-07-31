import { View, Text, FlatList } from "react-native";



export const CommentsScreen = ({ route }) => {
  const { comments } = route.params;

    return (
      
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={comments}
        renderItem={({item}) => (
          <View>
            <Text>{item.text}</Text>
          </View>
       )}
         keyExtractor={(item) => item.id}
      />
    </View>
  );
};

import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.view}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Show", { id: item.id })}
              >
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <EvilIcons style={styles.icon} name='trash' />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
    marginHorizontal: 16,
    borderBottomWidth: 0.2,
    borderColor: "gray",
  },
  text: {
    fontSize: 18,
    color: "green",
  },
  icon: {
    fontSize: 30,
  },
});

export default IndexScreen;

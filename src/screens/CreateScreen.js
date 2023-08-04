import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={addBlogPost}
      navigation={navigation}
      btnTitle='Add blog post'
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;

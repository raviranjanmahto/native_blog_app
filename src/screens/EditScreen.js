import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === route.params.id);

  return (
    <BlogPostForm
      label='Edit'
      onSubmit={editBlogPost}
      navigation={navigation}
      initialValues={{
        id: route.params.id,
        title: blogPost.title,
        content: blogPost.content,
      }}
      btnTitle='Save blog post'
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;

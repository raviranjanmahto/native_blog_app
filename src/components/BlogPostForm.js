import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const BlogPostForm = ({
  onSubmit,
  navigation,
  btnTitle,
  initialValues,
  label,
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  const id = initialValues.id || Math.floor(Math.random() * 999999999);

  return (
    <View>
      <Text style={styles.label}>
        {label ? `${label} title` : "Enter title"}
      </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder='Enter title here'
        autoFocus
      />
      <Text style={styles.label}>
        {label ? `${label} content` : "Enter content"}
      </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
        placeholder='Enter content here'
      />
      <Button
        onPress={() => {
          onSubmit(id, title, content, () => {
            id === initialValues.id
              ? navigation.pop()
              : navigation.navigate("Index");
          });
        }}
        title={`${btnTitle}`}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#000",
    margin: 4,
    marginBottom: 8,
    paddingHorizontal: 2,
    borderRadius: 5,
  },
  label: {
    fontSize: 20,
    margin: 4,
    borderRadius: 5,
  },
});
export default BlogPostForm;

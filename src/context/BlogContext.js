import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "addBlog":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "editBlog":
      return state.map(blogPost => {
        if (blogPost.id === action.payload.id) return action.payload;

        return blogPost;
      });

    case "deleteBlog":
      return state.filter(blogPost => blogPost.id !== action.payload);

    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch({ type: "addBlog", payload: { id, title, content } });
    callback();
  };
};

const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch({ type: "editBlog", payload: { id, title, content } });
    callback();
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: "deleteBlog", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, editBlogPost, deleteBlogPost },
  [{ title: "Test Title", content: "Test Content", id: 1 }]
);

import { Container } from "unstated";
import API from "../services/API";

class PostStore extends Container {
  state = {
    posts: [],
    currentPost: {},
    currentPostComments: []
  };

  loadPostList = async () => {
    const result = await API.fetchPostList();
    this.setState({
      posts: result
    });
  };

  loadPostComments = async postId => {
    const result = await API.fetchComments(postId);
    this.setState({
      currentPostComments: result
    });
  };

  setCurrentPost = postId => {
    const post = this.state.posts.find(item => item.id === postId);
    this.setState({ currentPost: post });
  };
}

export default new PostStore();

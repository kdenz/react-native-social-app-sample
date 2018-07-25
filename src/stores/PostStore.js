/**
|--------------------------------------------------
| Unstated Store for Post-Related states and actions
|--------------------------------------------------
*/
import { Container } from "unstated";
import API from "../services/API";

class PostStore extends Container {
  state = {
    posts: [],  // List of posts to be displayed in PostScreen
    currentPost: {},  // Current Post to be shown in PostDetailScreen
    currentPostComments: [] // Comments for the current post in PostDetailScreen
  };

  // Called when PostScreen is mounted, loads the post list from the server
  loadPostList = async () => {
    const result = await API.fetchPostList();
    this.setState({
      posts: result
    });
  };

  // Called when PostDetailScreen is mounted, loads the related comments
  loadPostComments = async postId => {
    const result = await API.fetchComments(postId);
    this.setState({
      currentPostComments: result
    });
  };

  // Called before entering PostDetailScreen, so that only chosen post is shown
  setCurrentPost = postId => {
    const post = this.state.posts.find(item => item.id === postId);
    this.setState({ currentPost: post });
  };
}

export default new PostStore();

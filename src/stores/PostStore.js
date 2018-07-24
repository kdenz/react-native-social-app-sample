import { Container } from "unstated";
import API from "../services/API";

class PostStore extends Container {
  state = {
    posts: []
  };

  loadPostList = async () => {
    const result = await API.fetchPostList();
    this.setState({
      posts: result
    });
  };
}

export default new PostStore();

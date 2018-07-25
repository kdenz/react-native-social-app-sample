import { Container } from "unstated";
import API from "../services/API";

class FriendStore extends Container {
  state = {
    friends: [],
    friendMap: {},
    currentFriend: {}
  };
  initializeFriendList = async () => {
    const result = await API.fetchFriendList();
    this.setState({
      friends: result,
      friendMap: this.getFriendMap(result)
    });
  };

  getFriendMap = friends => {
    let friendMap = {};
    friends.forEach(item => {
      friendMap[item.id] = item;
    });
    return friendMap;
  };

  setCurrentFriend = userId => {
    const currentFriend = this.state.friendMap[userId];
    this.setState({
      currentFriend
    });
  };
}

export default new FriendStore();

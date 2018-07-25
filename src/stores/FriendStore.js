/**
|--------------------------------------------------
| Unstated Store for Friend-Related data and actions
|--------------------------------------------------
*/
import { Container } from "unstated";
import API from "../services/API";

class FriendStore extends Container {
  state = {
    friends: [],  // The list of friends to be displayed in FriendScreen
    friendMap: {},  // An object mapping userId to the user item, for use to display user info elsewhere
    currentFriend: null   // The chosen friend whom its info shall be displayed in FriendDetailScreen
  };

  // Called at the beginning of app initialization
  // Because many screens require the use of friends object
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

  // Called before entering FriendDetailScreen, so that relevant info may be shown
  setCurrentFriend = userId => {
    const currentFriend = this.state.friendMap[userId];
    this.setState({
      currentFriend
    });
  };
}

export default new FriendStore();

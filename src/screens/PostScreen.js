import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Subscribe } from "unstated";
import PostStore from "../stores/PostStore";
import ScreenContainer from "../components/ScreenContainer";
import Post from "../components/Post";
import FriendStore from "../stores/FriendStore";

export default class PostScreenContainer extends Component {
  render() {
    return (
      <Subscribe to={[PostStore, FriendStore]}>
        {(postStore, friendStore) => (
          <PostScreen
            postStore={postStore}
            friendStore={friendStore}
            {...this.props}
          />
        )}
      </Subscribe>
    );
  }
}

class PostScreen extends Component {
  componentDidMount() {
    const { postStore } = this.props;
    postStore.loadPostList();
  }

  onCommentPress = postId => {
    const {
      navigation: { navigate },
      postStore
    } = this.props;
    postStore.setCurrentPost(postId);
    navigate("PostDetail", { postId });
  };

  renderItem = ({ item }) => {
    const {
      friendStore: {
        state: { friendMap }
      }
    } = this.props;
    const userItem = friendMap[item.userId];

    let userName, userCompany, userCompanyCatchPhrase;
    if (userItem) {
      userName = userItem.username;
      userCompany = userItem.company.name;
      userCompanyCatchPhrase = userItem.company.catchPhrase;
    }
    return (
      <Post
        postId={item.id}
        title={item.title}
        desc={item.body}
        userName={userName}
        userCompany={userCompany}
        userCompanyCatchPhrase={userCompanyCatchPhrase}
        onCommentPress={this.onCommentPress}
      />
    );
  };

  render() {
    const { postStore } = this.props;
    return (
      <ScreenContainer title={"Posts"}>
        <FlatList
          data={postStore.state.posts}
          renderItem={this.renderItem}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScreenContainer>
    );
  }
}

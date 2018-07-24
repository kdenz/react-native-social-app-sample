import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import PostStore from "../stores/PostStore";
import FriendStore from "../stores/FriendStore";
import { Subscribe } from "unstated";
import ScreenContainer from "../components/ScreenContainer";
import Post from "../components/Post";
import CommentCard from "../components/CommentCard";

export default class PostDetailScreenContainer extends Component {
  render() {
    return (
      <Subscribe to={[PostStore, FriendStore]}>
        {(postStore, friendStore) => (
          <PostDetailScreen
            postStore={postStore}
            friendStore={friendStore}
            {...this.props}
          />
        )}
      </Subscribe>
    );
  }
}

class PostDetailScreen extends Component {
  componentDidMount = () => {
    const { postStore, navigation } = this.props;
    postStore.loadPostComments(navigation.getParam("postId"));
  };

  renderCurrentItem = ({ item }) => {
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
        hideCommentButton
      />
    );
  };

  renderComment = ({ item }) => {
    return (
      <CommentCard email={item.email} title={item.name} comment={item.body} />
    );
  };
  render() {
    const {
      postStore: {
        state: { currentPost, currentPostComments }
      }
    } = this.props;
    return (
      <ScreenContainer>
        {this.renderCurrentItem({ item: currentPost })}
        <Text
          style={{ alignSelf: "center", fontWeight: "bold", marginTop: 20 }}>
          Comments ({currentPostComments.length})
        </Text>
        <FlatList
          data={currentPostComments}
          renderItem={this.renderComment}
          style={{ marginTop: 10, paddingBottom: 100 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScreenContainer>
    );
  }
}

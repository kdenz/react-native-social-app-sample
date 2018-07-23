import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Subscribe } from "unstated";
import PostStore from "../stores/PostStore";
import ScreenContainer from "../components/ScreenContainer";
import Post from "../components/Post";

export default class PostScreenContainer extends Component {
  render() {
    return (
      <Subscribe to={[PostStore]}>
        {postStore => <PostScreen postStore={postStore} />}
      </Subscribe>
    );
  }
}

class PostScreen extends Component {
  componentDidMount() {
    const { postStore } = this.props;
    // postStore.fetchPosts()
  }

  renderItem = ({ item }) => <Post />;

  render() {
    const { postStore } = this.props;
    return (
      <ScreenContainer title={"Posts"}>
        <FlatList data={postStore.state.posts} renderItem={this.renderItem} />
      </ScreenContainer>
    );
  }
}

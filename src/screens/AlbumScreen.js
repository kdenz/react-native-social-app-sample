/**
|--------------------------------------------------
| Screen component for the Album Tab Screen
| Shows a social feed of albums
|--------------------------------------------------
*/
import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import PhotoStore from "../stores/PhotoStore";
import FriendStore from "../stores/FriendStore";
import ScreenContainer from "../components/ScreenContainer";
import { Subscribe } from "unstated";
import Post from "../components/Post";

export default class AlbumScreenContainer extends Component {
  render() {
    return (
      <Subscribe to={[PhotoStore, FriendStore]}>
        {(photoStore, friendStore) => (
          <AlbumScreen
            photoStore={photoStore}
            friendStore={friendStore}
            {...this.props}
          />
        )}
      </Subscribe>
    );
  }
}

class AlbumScreen extends Component {
  componentDidMount() {
    const { photoStore } = this.props;
    photoStore.initializePhotoStore();
  }

  // Renders a single album item
  renderItem = ({ item }) => {
    const {
      friendStore: {
        state: { friendMap }
      },
      photoStore: {
        state: { photoMap }
      }
    } = this.props;

    // User Info for the author of an album
    const userItem = friendMap[item.userId];

    // If an author exists for an album, show the info
    let userName, userCompany, userCompanyCatchPhrase;
    if (userItem) {
      userName = userItem.username;
      userCompany = userItem.company.name;
      userCompanyCatchPhrase = userItem.company.catchPhrase;
    }

    //Returns first 4 photos to show as thumbnails
    const photos = photoMap[item.id] && photoMap[item.id].slice(0, 4);

    return (
      <Post
        postId={item.id}
        photos={photos}
        title={item.title}
        userName={userName}
        userCompany={userCompany}
        userCompanyCatchPhrase={userCompanyCatchPhrase}
        onPostPress={this.onAlbumPress}
      />
    );
  };

  // Sets the selected album and navigate to it
  onAlbumPress = albumId => {
    const {
      navigation: { navigate },
      photoStore
    } = this.props;
    photoStore.setCurrentAlbum(albumId);
    navigate("AlbumDetail", { albumId });
  };

  render() {
    const { photoStore } = this.props;
    return (
      <ScreenContainer title={"Albums"}>
        <FlatList
          data={photoStore.state.albums}
          renderItem={this.renderItem}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScreenContainer>
    );
  }
}

import React, { Component } from "react";
import { Text, View, FlatList, Image } from "react-native";
import PhotoStore from "../stores/PhotoStore";
import ScreenContainer from "../components/ScreenContainer";
import { Subscribe } from "unstated";
import http from "../utils/http";

export default class AlbumDetailScreenContainer extends Component {
  render() {
    return (
      <Subscribe to={[PhotoStore]}>
        {photoStore => (
          <AlbumDetailScreen photoStore={photoStore} {...this.props} />
        )}
      </Subscribe>
    );
  }
}

class AlbumDetailScreen extends Component {
  renderItem = ({ item }) => {
    return (
      <View>
        <Image
          source={{ uri: http.convertToHTTPS(item.url) }}
          style={{
            width: global.screenWidth,
            height: global.screenWidth
          }}
        />
      </View>
    );
  };
  render() {
    const { photoStore } = this.props;
    return (
      <ScreenContainer>
        <FlatList
          data={photoStore.state.currentAlbum}
          renderItem={this.renderItem}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScreenContainer>
    );
  }
}

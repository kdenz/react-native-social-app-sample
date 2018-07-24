import React, { PureComponent } from "react";
import { View, StyleSheet, Image } from "react-native";
import http from "../utils/http";

export default class PhotoThumbnails extends PureComponent {
  renderPhoto = uri => {
    return <Image source={{ uri }} style={styles.image} />;
  };
  render() {
    const { photos } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          {this.renderPhoto(http.convertToHTTPS(photos[0].thumbnailUrl))}
          {this.renderPhoto(http.convertToHTTPS(photos[1].thumbnailUrl))}
        </View>
        <View style={styles.row2}>
          {this.renderPhoto(http.convertToHTTPS(photos[2].thumbnailUrl))}
          {this.renderPhoto(http.convertToHTTPS(photos[3].thumbnailUrl))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center"
  },
  row1: {
    flexDirection: "row",
    marginTop: 20
  },
  row2: {
    flexDirection: "row",
    marginTop: 10
  },
  image: {
    width: 100,
    height: 100
  }
});

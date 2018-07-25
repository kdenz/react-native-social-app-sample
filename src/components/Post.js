/**
|--------------------------------------------------
| A post component for the PostScreen and AlbumScreen
|--------------------------------------------------
*/
import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import theme from "../styles/theme";
import PhotoThumbnails from "./PhotoThumbnails";
import UserBadge from "./UserBadge";

export default class Post extends Component {
  onCommentPress = () => {
    const { postId, onCommentPress } = this.props;
    onCommentPress && onCommentPress(postId);
  };

  onPostPress = () => {
    const { postId, onPostPress } = this.props;
    onPostPress && onPostPress(postId);
  };

  render() {
    const {
      title,
      desc,
      userName,
      userCompany,
      userCompanyCatchPhrase,
      photos,
      hideCommentButton,
      onPostPress
    } = this.props;
    return (
      <TouchableOpacity disabled={!onPostPress} onPress={this.onPostPress}>
        <View style={styles.container}>
          <Text style={styles.title}> {title} </Text>
          {photos ? (
            <PhotoThumbnails photos={photos} />
          ) : (
            <Text style={styles.desc}> {desc} </Text>
          )}

          <UserBadge
            userName={userName}
            userCompany={userCompany}
            userCompanyCatchPhrase={userCompanyCatchPhrase}
          />
          {photos || hideCommentButton ? null : (
            <TouchableOpacity onPress={this.onCommentPress}>
              <View style={styles.commentButton}>
                <Text style={styles.commentText}>Comment(s)</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    shadowOffset: { width: 1, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 3,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    margin: 5
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE
  },
  desc: {
    color: "grey",
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginTop: 10
  },
  commentButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "lightgrey",
    paddingVertical: 10,
    marginTop: 20
  },
  commentText: {
    color: "grey"
  }
});

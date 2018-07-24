import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import theme from "../styles/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PhotoThumbnails from "./PhotoThumbnails";

export default class Post extends Component {
  onCommentPress = () => {
    const { postId, onCommentPress } = this.props;
    onCommentPress && onCommentPress(postId);
  };
  render() {
    const {
      title,
      desc,
      userName,
      userCompany,
      userCompanyCatchPhrase,
      photos
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {title} </Text>
        {photos ? (
          <PhotoThumbnails photos={photos} />
        ) : (
          <Text style={styles.desc}> {desc} </Text>
        )}

        <View style={styles.userContainer}>
          <View style={styles.userAvatar}>
            <Icon
              name={"account"}
              color={"grey"}
              size={40}
              style={{ marginTop: 5 }}
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.userCompany}>{userCompany}</Text>
            <Text style={styles.userCompanyCatchPhrase}>
              {userCompanyCatchPhrase}
            </Text>
          </View>
        </View>
        {photos ? null : (
          <TouchableOpacity onPress={this.onCommentPress}>
            <View style={styles.commentButton}>
              <Text style={styles.commentText}>Comment(s)</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
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
  userContainer: {
    flexDirection: "row",
    marginTop: 20
  },
  userAvatar: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  userInfo: {
    flex: 8
  },
  userName: {
    fontSize: theme.FONT_SIZE_MEDIUM
  },
  userCompany: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: "grey"
  },
  userCompanyCatchPhrase: { fontSize: theme.FONT_SIZE_SMALL, color: "grey" },
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

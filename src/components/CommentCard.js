import React, { PureComponent } from "react";
import { Text, StyleSheet, View } from "react-native";
import theme from "../styles/theme";

export default class CommentCard extends PureComponent {
  render() {
    const { email, title, comment } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.comment}>{comment}</Text>
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
    padding: 20,
    marginTop: 0,
    margin: 5,
    marginBottom: 15
  },
  title: { fontSize: theme.FONT_SIZE_MEDIUM },
  email: { color: "grey" },
  comment: { marginTop: 10 }
});

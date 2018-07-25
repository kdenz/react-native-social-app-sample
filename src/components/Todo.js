/**
|--------------------------------------------------
| Reusable component for creating a todo item
|--------------------------------------------------
*/
import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Todo extends PureComponent {
  render() {
    const { done, title } = this.props;
    return (
      <View style={[styles.container, done ? styles.doneStyle : {}]}>
        <Text style={styles.title}> {title} </Text>
        <Icon
          name={"check"}
          color={done ? "#2ECC40" : "white"}
          size={40}
          style={{ marginTop: 5 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    shadowOffset: { width: 1, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 3,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5
  },
  doneStyle: {
    backgroundColor: "#01FF70"
  },
  title: {
    flex: 1
  }
});

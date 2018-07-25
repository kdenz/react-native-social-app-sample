/**
|--------------------------------------------------
| Reusable component which is used in most screens if not all
| for applying the same base stles
|--------------------------------------------------
*/
import React, { Component } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import theme from "../styles/theme";

export default class ScreenContainer extends Component {
  render() {
    const { title, children, style } = this.props;
    return (
      <ScrollView style={[styles.container, style ? style : {}]}>
        {title && <Text style={styles.title}>{title}</Text>}
        {children}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: theme.PRIMARY_COLOR,
    marginTop: 10,
    fontSize: theme.FONT_SIZE_XL,
    fontWeight: "bold"
  },
  container: {
    backgroundColor: theme.SECONDARY_COLOR,
    padding: 20,
    flex: 1
  }
});

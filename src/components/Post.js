import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Post extends Component {
  render() {
    const { title, desc } = this.props;
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

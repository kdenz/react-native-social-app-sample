/**
|--------------------------------------------------
| Reusable component for UserProfile to display cards of user info fields
|--------------------------------------------------
*/
import React, { PureComponent } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class FieldCard extends PureComponent {
  render() {
    const { label, value } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
  label: { fontWeight: "bold", flex: 1 },
  value: { flex: 3 }
});

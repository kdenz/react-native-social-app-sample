/**
|--------------------------------------------------
| Reusable component for showing the horizontal user banner with some company info
|--------------------------------------------------
*/
import React, { PureComponent } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../styles/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class UserBadge extends PureComponent {
  onPress = () => {
    const { onPress, userId } = this.props;
    onPress && onPress(userId);
  };
  render() {
    const {
      userName,
      userCompany,
      userCompanyCatchPhrase,
      cardMode,
      onPress
    } = this.props;
    return (
      <TouchableOpacity disabled={!onPress} onPress={this.onPress}>
        <View style={[styles.userContainer, cardMode ? styles.cardStyle : {}]}>
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
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    marginTop: 20
  },
  cardStyle: {
    shadowOffset: { width: 1, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 3,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginTop: 0,
    margin: 5,
    marginBottom: 15
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
  userCompanyCatchPhrase: { fontSize: theme.FONT_SIZE_SMALL, color: "grey" }
});

import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import ScreenContainer from "./ScreenContainer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../styles/theme";
import FieldCard from "./FieldCard";

export default class UserProfile extends PureComponent {
  render() {
    const {
      name,
      companyName,
      companyCatchPhrase,
      phone,
      email,
      address
    } = this.props;
    return (
      <ScreenContainer>
        <View style={styles.userInfo}>
          <Icon name={"account-circle"} color={"grey"} size={120} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.companyName}>{companyName}</Text>
          <Text style={styles.companyCatchPhrase}>{companyCatchPhrase}</Text>
        </View>
        <View style={styles.fieldSection}>
          <FieldCard label={"Phone:"} value={phone} />
          <FieldCard label={"Email:"} value={email} />
          <FieldCard label={"Address:"} value={address} />
        </View>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  userInfo: { alignItems: "center", marginTop: 50 },
  name: {
    fontSize: theme.FONT_SIZE_LARGE
  },
  companyName: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginTop: 20
  },
  companyCatchPhrase: {
    fontSize: theme.FONT_SIZE_SMALL,
    marginTop: 5,
    color: "grey"
  },
  fieldSection: {
    marginTop: 30
  }
});

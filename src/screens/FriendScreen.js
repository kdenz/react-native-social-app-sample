import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import { Subscribe } from "unstated";
import FriendStore from "../stores/FriendStore";
import UserBadge from "../components/UserBadge";

export default class FriendScreenContainer extends Component {
  render() {
    return (
      <Subscribe to={[FriendStore]}>
        {friendStore => (
          <FriendScreen friendStore={friendStore} {...this.props} />
        )}
      </Subscribe>
    );
  }
}

class FriendScreen extends Component {
  componentDidMount() {
    const { friendStore } = this.props;
  }
  renderItem = ({ item }) => {
    return (
      <UserBadge
        cardMode
        userId={item.id}
        userName={item.name}
        userCompany={item.company.name}
        userCompanyCatchPhrase={item.company.catchPhrase}
        onPress={this.onFriendPress}
      />
    );
  };

  onFriendPress = userId => {
    const {
      navigation: { navigate },
      friendStore
    } = this.props;
    friendStore.setCurrentFriend(userId);
    navigate("FriendDetail", { userId });
  };

  render() {
    const { friendStore } = this.props;
    return (
      <ScreenContainer title={"My Friends"}>
        <FlatList
          data={friendStore.state.friends}
          renderItem={this.renderItem}
          style={{ marginTop: 10, paddingBottom: 100 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScreenContainer>
    );
  }
}

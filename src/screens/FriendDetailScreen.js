import React, { Component } from "react";
import { Text, View, FlatList, Image } from "react-native";
import { Subscribe } from "unstated";
import http from "../utils/http";
import UserProfile from "../components/UserProfile";
import FriendStore from "../stores/FriendStore";

export default class FriendDetailScreenContainer extends Component {
  render() {
    return (
      <Subscribe to={[FriendStore]}>
        {friendStore => (
          <FriendDetailScreen friendStore={friendStore} {...this.props} />
        )}
      </Subscribe>
    );
  }
}

class FriendDetailScreen extends Component {
  render() {
    const { friendStore } = this.props;
    const currentFriend = friendStore.state.currentFriend;
    return (
      <UserProfile
        name={currentFriend.name}
        companyName={currentFriend.company.name}
        companyCatchPhrase={currentFriend.company.catchPhrase}
        email={currentFriend.email}
        phone={currentFriend.phone}
        address={
          currentFriend.address.street +
          currentFriend.address.suite +
          currentFriend.address.city
        }
      />
    );
  }
}

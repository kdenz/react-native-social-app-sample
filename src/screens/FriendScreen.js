import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import { Subscribe } from "unstated";
import FriendStore from "../stores/FriendStore";
import Todo from "../components/Todo";
import UserBadge from "../components/UserBadge";

export default class FriendScreenContainer extends Component {
  render() {
    return (
      <Subscribe to={[FriendStore]}>
        {friendStore => <FriendScreen friendStore={friendStore} />}
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
        userName={item.name}
        userCompany={item.company.name}
        userCompanyCatchPhrase={item.company.catchPhrase}
      />
    );
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

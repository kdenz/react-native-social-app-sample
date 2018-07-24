import React from "react";
import { Dimensions } from "react-native";

import { Provider } from "unstated";

import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PostScreen from "./src/screens/PostScreen";
import AlbumScreen from "./src/screens/AlbumScreen";
import TaskScreen from "./src/screens/TaskScreen";
import FriendScreen from "./src/screens/FriendScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import theme from "./src/styles/theme";
import FriendStore from "./src/stores/FriendStore";
import PostDetailScreen from "./src/screens/PostDetailScreen";

const { height, width } = Dimensions.get("window");

global.screenHeight = height;
global.screenWidth = width;
const bottomNavIconMap = {
  Posts: "message-outline",
  Albums: "image-multiple",
  Tasks: "checkbox-marked-outline",
  Friends: "account-multiple",
  Profile: "account"
};

const BottomTabNav = createBottomTabNavigator(
  {
    Posts: {
      screen: PostScreen
    },
    Albums: {
      screen: AlbumScreen
    },
    Tasks: {
      screen: TaskScreen
    },
    Friends: {
      screen: FriendScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        // Determines which icon to show and what color it is
        const { routeName } = navigation.state;
        const iconName = bottomNavIconMap[routeName];

        return (
          <Icon
            name={iconName}
            color={tintColor}
            size={25}
            style={{ marginTop: 5 }}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "gray",
      activeBackgroundColor: theme.SECONDARY_COLOR,
      inactiveBackgroundColor: theme.SECONDARY_COLOR,
      labelStyle: {
        marginBottom: 5
      }
    }
  }
);

const AppNavigator = createStackNavigator({
  Main: {
    screen: BottomTabNav,
    navigationOptions: ({ navigation }) => ({ header: null })
  },
  PostDetail: {
    screen: PostDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Post Detail",
      headerTintColor: theme.PRIMARY_COLOR,
      // headerTintColor: "white",
      headerStyle: {
        backgroundColor: theme.SECONDARY_COLOR,
        borderBottomColor: theme.SECONDARY_COLOR
      }
    })
  }
});

export default class App extends React.Component {
  componentDidMount() {
    FriendStore.initializeFriendList();
  }
  render() {
    return (
      <Provider>
        <AppNavigator />
      </Provider>
    );
  }
}

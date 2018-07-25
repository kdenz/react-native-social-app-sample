/**
|--------------------------------------------------
| Entry point for the app
| Contains routing and config for react-navigation
| Provider wraps around Navigator to enable state management by unstated
|--------------------------------------------------
*/
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
import AlbumDetailScreen from "./src/screens/AlbumDetailScreen";
import FriendDetailScreen from "./src/screens/FriendDetailScreen";

const { height, width } = Dimensions.get("window");

global.screenHeight = height;
global.screenWidth = width;

// Mapping for icons to use corresponding to certain routes
const bottomNavIconMap = {
  Posts: "message-outline",
  Albums: "image-multiple",
  Tasks: "checkbox-marked-outline",
  Friends: "account-multiple",
  Profile: "account"
};

// Setup for bottom tab navigation
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

const topNavBarStyle = {
  headerTintColor: theme.PRIMARY_COLOR,
  headerStyle: {
    backgroundColor: theme.SECONDARY_COLOR,
    borderBottomColor: theme.SECONDARY_COLOR
  }
}

// Setup for App-wide top-level navigation
const AppNavigator = createStackNavigator({
  Main: {
    screen: BottomTabNav,
    navigationOptions: ({ navigation }) => ({ header: null })
  },
  PostDetail: {
    screen: PostDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Post Detail",
      ...topNavBarStyle
    })
  },
  AlbumDetail: {
    screen: AlbumDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Album Detail",
      ...topNavBarStyle
    })
  },
  FriendDetail: {
    screen: FriendDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Friend Detail",
      ...topNavBarStyle
    })
  }
});

export default class App extends React.Component {
  componentDidMount() {
    // Downloads the user list so it can be used throughout the app 
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

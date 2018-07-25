/**
|--------------------------------------------------
| Screen with hardcoded data just to make the app more complete
|--------------------------------------------------
*/
import React, { Component } from "react";
import UserProfile from "../components/UserProfile";

export default class ProfileScreen extends Component {
  render() {
    return (
      <UserProfile
        name={"Kaiden Sin"}
        companyName={"Awesomeness Ltd."}
        companyCatchPhrase={"I love to develop awesome products"}
        email={"kaiden@awesome.com"}
        phone={"66666666"}
        address={"Douglas Extension, Suite 846, McKenziehaven"}
      />
    );
  }
}

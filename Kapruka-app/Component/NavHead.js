import React, { Component } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class NavHead extends Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "8%",
          backgroundColor: "#223F98",
          borderBottomEndRadius: 25,
          borderBottomStartRadius: 25,
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          position: "fixed",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginStart: 20,
          }}
        >
          <View
            style={{
              alignItems: "start",
              width: "50%",
              marginLeft: "5px",
              marginTop: "5px",
              justifyContent: "flex-start",
            }}
          >
            <Icon.Button
              name="bars"
              backgroundColor="none"
              color="white"
              size={30}
            ></Icon.Button>
          </View>
          <View
            style={{
              marginTop: "5px",
              marginLeft: 70,
            }}
          >
            <Icon.Button
              name="cart-plus"
              backgroundColor="none"
              color="white"
              size={30}
            ></Icon.Button>
          </View>

          <View
            style={{
              alignItems: "end",
              marginTop: "5px",
              justifyContent: "flex-end",
            }}
          >
            <Icon.Button
              name="user-circle"
              backgroundColor="none"
              color="white"
              size={30}
            ></Icon.Button>
          </View>
        </View>
      </View>
    );
  }
}

import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Footer extends Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "8%",
          backgroundColor: "#223F98",
          borderTopStartRadius: 25,
          borderTopEndRadius: 25,
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          position: "fixed",
          bottom: 0,
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
              marginLeft: 10,
              marginTop: 10,
              justifyContent: "flex-start",
            }}
          >
            <Icon.Button
              name="home"
              backgroundColor="none"
              color="white"
              size={30}
            ></Icon.Button>
          </View>
          <View
            style={{
              marginTop: "5px",
              marginLeft: 50,
              justifyContent: "flex-end",
            }}
          >
            <Icon.Button
              name="search"
              backgroundColor="none"
              color="white"
              size={30}
            ></Icon.Button>
          </View>
          <View
            style={{
              marginLeft: 50,
              marginTop: "5px",
              justifyContent: "flex-start",
            }}
          >
            {/* <Icon.Button
              name="shop"
              backgroundColor="none"
              color="white"
              size={30}
            ></Icon.Button> */}
            <Image
              source={require("../images/store.png")}
              style={{
                width: 28,
                height: 28,
                marginLeft: 5,
                marginTop: 13,
              }}
            ></Image>
          </View>
          <View
            style={{
              marginLeft: 50,
              marginTop: "5px",
              justifyContent: "flex-end",
            }}
          >
            <Icon.Button
              name="bell"
              size={30}
              backgroundColor="none"
              color="white"
            ></Icon.Button>
          </View>
        </View>
      </View>
    );
  }
}

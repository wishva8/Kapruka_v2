import React, { Component } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import App from "../App";
import DeliveryDetails from "./DeliveryDetails";
import NewAddress from "./NewAddress";
import Shop from "./Shop";

const Drawer = createDrawerNavigator();

export default class NavHead extends Component {
  render() {
    return (
      // <NavigationContainer>
      //   <Drawer.Navigator
      //     screenOptions={{
      //       headerShown: true,
      //       headerTitle: "",
      //       headerStyle: {
      //         width: "100%",
      //         backgroundColor: "#223F98",
      //         borderBottomEndRadius: 25,
      //         borderBottomStartRadius: 25,
      //         shadowColor: "#171717",
      //         shadowOffset: { width: -2, height: 4 },
      //         shadowOpacity: 0.2,
      //         shadowRadius: 4,
      //         position: "fixed",
      //       },
      //     }}
      //   >
      //     <Drawer.Screen name="Delivery Details" component={DeliveryDetails} />
      //     <Drawer.Screen name="New Address" component={NewAddress} />
      //     <Drawer.Screen name="Shop" component={Shop} />
      //   </Drawer.Navigator>
      // </NavigationContainer>
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
            <Icon.Button onPress={() => {this.props.App.DrawerNavigator('DrawerOpen')}}
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

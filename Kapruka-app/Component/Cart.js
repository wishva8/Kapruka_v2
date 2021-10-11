import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from "./Footer";
import NavHead from "./NavHead";

export default function Cart() {
  const styles = StyleSheet.create({
    boxContainer: {
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 5,
      height: 100,
      marginLeft: 20,
      borderColor: "#C4C4C4",
      alignItems: "center",
      justifyContent: "center",
      width: 350,
      borderRadius: 8,
    },
  });

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <view>
        <NavHead></NavHead>
      </view>
      <View
        style={{
          width: "50%",
        }}
      >
        <Text
          style={{
            fontSize: "24px",
            width: "85%",
            fontSize: 24,
            marginStart: 20,
            marginTop: 100,
            fontWeight: 400,
          }}
        >
          Cart
        </Text>
      </View>
      <View
        style={{
          height: 120,
          flexDirection: "row",
          paddingTop: 10,
          paddingStart: 20,
          width: "100%",
        }}
      >
        <View style={styles.boxContainer}>
          <view
            style={{
              width: 10,
              height: 10,
            }}
          >
            <Image source={require("../images/Blackforest_1.png")}></Image>
          </view>
        </View>
      </View>
      <View
        style={{
          height: 120,
          flexDirection: "row",
          paddingTop: 10,
          paddingStart: 20,
          width: "100%",
        }}
      >
        <View style={styles.boxContainer}>
          <view
            style={{
              marginLeft: 45,
              marginTop: 15,
              width: 200,
            }}
          ></view>
        </View>
      </View>

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
      ></View>
      <View
        style={{
          flexDirection: "row",
          marginStart: 250,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 100,
          marginStart: 230,
        }}
      >
        <Text
          style={{
            marginRight: 20,
            fontWeight: "bold",
          }}
        >
          SUB TOTAL: Rs 7800.00
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginStart: 25,
          marginTop: 25,
        }}
      >
        <Icon.Button
          style={{
            borderRadius: "8px",
            width: "350px",
            height: "35px",
            textAlign: "center",
            backgroundColor: "#223F98",
            paddingLeft: "130px",
            fontWeight: 300,
            fontSize: 100,
          }}
        >
          Continue
        </Icon.Button>
      </View>
      <view
        style={{
          flexDirection: "row",
          width: 150,
        }}
      >
        <Icon.Button
          name="long-arrow-alt-left"
          backgroundColor="none"
          color="black"
        ></Icon.Button>
        <Text
          style={{
            fontSize: 15,

            color: "#223F98",
          }}
        >
          Continue Shopping
        </Text>
      </view>
      <Footer></Footer>
    </View>
  );
}

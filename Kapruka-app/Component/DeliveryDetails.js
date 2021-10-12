import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from "./Footer";
import NavHead from "./NavHead";

export default function DeliveryDetails() {
  const styles = StyleSheet.create({
    boxContainer: {
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 4,
      height: 76,
      marginLeft: 20,
      borderColor: "#C4C4C4",
      alignItems: "center",
      justifyContent: "center",
      width: 157,
      borderRadius: 8,
    },
  });

  const [checked, setChecked] = React.useState("first");
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >

      {/* <NavHead/> */}

      <Text
        style={{
          fontSize: 22,
          marginStart: 25,
          marginTop: 20,
        }}
      >
        Delivery Details
      </Text>
      <View
        style={{
          flexDirection: "row",
          paddingStart: 20,
          width: "100%",
        }}
      >
        <View
          style={{
            height: 35,
            color: "#C4C4C4",
          }}
        ></View>
      </View>

      <View
        style={{
          height: 120,
          flexDirection: "row",
          paddingStart: 20,
          width: "100%",
        }}
      >
        <View style={styles.boxContainer}>
          <View
            style={{
              marginLeft: 45,
              marginTop: -5,
              width: 200,
            }}
          >
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text
              style={{
                marginLeft: 45,
                marginTop: -30,
              }}
            >
              Home Address
            </Text>
          </View>
            <Text
              style={{
                marginLeft: 10,
                marginRight: 10,
                paddingTop: 10,
              }}
            >
              No 526A: Perera Road, Malabe
            </Text>
        </View>
        <View style={styles.boxContainer}>
          <View
            style={{
              marginLeft: 35,
              marginTop: -5,
              width: 190,
            }}
          >
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
            <Text
              style={{
                marginLeft: 45,
                marginTop: -30,
              }}
            >
              Office Address
            </Text>
          </View>
            <Text
              style={{
                marginLeft: 10,
                marginRight: 10,
                paddingTop: 10,
              }}
            >
              284/2: Dekadana South, Dekadana
            </Text>
        </View>
      </View>
      <View
        style={{
          height: 120,
          flexDirection: "row",
          paddingStart: 20,
          width: "100%",
        }}
      >
        <View style={styles.boxContainer}>
          <Text>
            <Icon.Button
              backgroundColor="none"
              color="black"
              name="plus"
              style={{
                paddingLeft: "15px",
              }}
            ></Icon.Button>
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginStart: 250,
        }}
      >
        <Text style={{}}>Shipping: Rs 200.00</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginStart: 250,
        }}
      >
        <Text style={{}}>Total: Rs 7800.00</Text>
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
            paddingLeft: "135px",
            fontWeight: 300,
          }}
        >
          Pay Now
        </Icon.Button>
      </View>

      <Text
        style={{
          fontSize: 14,
          paddingLeft: 25,
          marginTop: 80,
          color: "#223F98",
        }}
      >
        Continue Shopping
      </Text>
      <Footer/>
    </View>
    
  );
}

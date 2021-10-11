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
          paddingTop: 10,
          paddingStart: 20,
          width: "100%",
        }}
      >
        <View style={styles.boxContainer}>
          <View
            style={{
              width: 10,
              height: 10,
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../images/Blackforest_1.png")}
              style={{
                width: 70,
                height: 50,
                marginTop: -20,
                marginLeft: -160,
              }}
            ></Image>
          </View>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                marginLeft: 45,
                marginTop: -30,
                fontWeight: "bold",
                alignItems: "end",
                marginLeft: 80,
              }}
            >
              Black Forest 1kg
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 70,
                marginTop: 10,
              }}
            >
              <Icon.Button
                name="minus"
                backgroundColor="#223F98"
                borderRadius={15}
                size={15}
                color="#fff"
                style={{
                  width: 50,
                  height: 30,
                  overflow: "hidden",
                  marginLeft: "20%",
                }}
              ></Icon.Button>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  marginStart: 10,
                  marginEnd: 10,
                }}
              >
                2
              </Text>

              <Icon.Button
                name="plus"
                backgroundColor="#223F98"
                borderRadius={15}
                marginLeft="5px"
                size={15}
                color="#fff"
                style={{
                  width: 50,
                  height: 30,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30,
                  overflow: "hidden",
                  marginLeft: "20%",
                }}
              ></Icon.Button>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  marginLeft: 200,
                  marginTop: -58,
                  alignItems: "end",
                }}
              >
                RS 2,600 x 2
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  marginStart: 201,
                  marginTop: 15,
                  marginEnd: 10,
                }}
              >
                Rs. 5,200.00
              </Text>
            </View>
            <Image
              source={require("../images/delete.png")}
              style={{
                width: 15,
                height: 15,
                marginLeft: 300,
                marginTop: -48,
              }}
            ></Image>
          </View>
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
          <View
            style={{
              width: 10,
              height: 10,
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../images/Blackforest_1.png")}
              style={{
                width: 70,
                height: 50,
                marginTop: -20,
                marginLeft: -160,
              }}
            ></Image>
          </View>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                marginLeft: 45,
                marginTop: -30,
                fontWeight: "bold",
                alignItems: "end",
                marginLeft: 80,
              }}
            >
              Black Forest 1kg
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 70,
                marginTop: 10,
              }}
            >
              <Icon.Button
                name="minus"
                backgroundColor="#223F98"
                borderRadius={15}
                size={15}
                color="#fff"
                style={{
                  width: 50,
                  height: 30,
                  overflow: "hidden",
                  marginLeft: "20%",
                }}
              ></Icon.Button>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  marginStart: 10,
                  marginEnd: 10,
                }}
              >
                1
              </Text>

              <Icon.Button
                name="plus"
                backgroundColor="#223F98"
                borderRadius={15}
                marginLeft="5px"
                size={15}
                color="#fff"
                style={{
                  width: 50,
                  height: 30,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30,
                  overflow: "hidden",
                  marginLeft: "20%",
                }}
              ></Icon.Button>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  marginLeft: 200,
                  marginTop: -58,
                  alignItems: "end",
                }}
              >
                RS 2,600 x 1
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  marginStart: 201,
                  marginTop: 15,
                  marginEnd: 10,
                }}
              >
                Rs. 2,600.00
              </Text>
            </View>
            <Image
              source={require("../images/delete.png")}
              style={{
                width: 15,
                height: 15,
                marginLeft: 300,
                marginTop: -48,
              }}
            ></Image>
          </View>
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
      <View
        style={{
          flexDirection: "row",
          paddingLeft: 5,
        }}
      >
        <Image
          source={require("../images/back.png")}
          style={{
            width: 50,
            height: 25,
            marginTop: 150,
          }}
        ></Image>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#223F98",
            marginTop: 150,
            paddingLeft: 13,
          }}
        >
          Continue Shopping
        </Text>
      </View>
      <Footer></Footer>
    </View>
  );
}

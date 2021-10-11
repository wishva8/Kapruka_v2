import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    const styles = StyleSheet.create({
      boxContainer: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        height: 97,
        marginLeft: 10,
        borderColor: "#C4C4C4",
        alignItems: "center",
        justifyContent: "center",
        width: 82,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
      },
    });
    const styles1 = StyleSheet.create({
      categoryBox: {
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        height: 119,
        marginLeft: 20,
        borderColor: "#C4C4C4",
        alignItems: "center",
        justifyContent: "center",
        width: 185,
        borderRadius: 25,
      },
    });

    return (
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "37%",
            backgroundColor: "#223F98",
            borderBottomEndRadius: 25,
            borderBottomStartRadius: 25,
            shadowColor: "#171717",
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            position: "absolute",
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
                marginTop: "5px",
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
        <View
          style={{
            width: "50%",
          }}
        >
          <Text
            style={{
              fontSize: "24px",
              width: "85%",
              fontSize: 22,
              marginStart: 20,
              marginTop: 70,
              fontWeight: 400,
              color: "white",
            }}
          >
            Hi, Wishva
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            marginLeft: 16,
          }}
        >
          <View style={styles.boxContainer}>
            <view
              style={{
                width: 60,
                flexDirection: "column",
              }}
            >
              <Icon.Button
                name="birthday-cake"
                backgroundColor="none"
                color="#223F98"
                size={40}
              ></Icon.Button>
              <Text
                style={{
                  marginLeft: 15,
                  color: "#808080",
                  alignItems: "center",
                }}
              >
                cake
              </Text>
            </view>
          </View>
          <View style={styles.boxContainer}>
            <view
              style={{
                width: 60,
                flexDirection: "column",
              }}
            >
              <Icon.Button
                name="shopping-basket"
                backgroundColor="none"
                color="#223F98"
                size={40}
              ></Icon.Button>
              <Text
                style={{
                  marginLeft: 5,
                  color: "#808080",
                  alignItems: "center",
                }}
              >
                Grocery
              </Text>
            </view>
          </View>
          <View style={styles.boxContainer}>
            <view
              style={{
                width: 60,
                flexDirection: "column",
              }}
            >
              <Icon.Button
                name="gamepad"
                backgroundColor="none"
                color="#223F98"
                size={40}
              ></Icon.Button>
              <Text
                style={{
                  marginLeft: 15,
                  color: "#808080",
                  alignItems: "center",
                }}
              >
                Toys
              </Text>
            </view>
          </View>
          <View style={styles.boxContainer}>
            <view
              style={{
                width: 60,
                flexDirection: "column",
              }}
            >
              <Icon.Button
                name="birthday-cake"
                backgroundColor="none"
                color="#223F98"
                size={40}
              ></Icon.Button>
              <Text
                style={{
                  marginLeft: 5,
                  color: "#808080",
                  alignItems: "center",
                }}
              >
                Flowers
              </Text>
            </view>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            marginLeft: 16,
          }}
        >
          <View style={styles.boxContainer}>
            <view
              style={{
                width: 60,
                flexDirection: "column",
              }}
            >
              <Icon.Button
                name="birthday-cake"
                backgroundColor="none"
                color="#223F98"
                size={40}
              ></Icon.Button>
              <Text
                style={{
                  marginLeft: 2,
                  color: "#808080",
                  alignItems: "center",
                }}
              >
                Hampers
              </Text>
            </view>
          </View>
          <View style={styles.boxContainer}>
            <view
              style={{
                width: 60,
                flexDirection: "column",
              }}
            >
              <Icon.Button
                name="birthday-cake"
                backgroundColor="none"
                color="#223F98"
                size={40}
              ></Icon.Button>
              <Text
                style={{
                  marginLeft: 5,
                  color: "#808080",
                  alignItems: "center",
                }}
              >
                Clothers
              </Text>
            </view>
          </View>
          <View style={styles.boxContainer}>
            <view
              style={{
                width: 60,
                flexDirection: "column",
              }}
            >
              <Icon.Button
                name="birthday-cake"
                backgroundColor="none"
                color="#223F98"
                size={40}
              ></Icon.Button>
              <Text
                style={{
                  marginLeft: 10,
                  color: "#808080",
                  alignItems: "center",
                }}
              >
                Shoes
              </Text>
            </view>
          </View>
          <View style={styles.boxContainer}>
            <view
              style={{
                width: 60,
                flexDirection: "column",
              }}
            >
              <Icon.Button
                name="birthday-cake"
                backgroundColor="none"
                color="#223F98"
                size={40}
              ></Icon.Button>
              <Text
                style={{
                  marginLeft: 10,
                  color: "#808080",
                  alignItems: "center",
                }}
              >
                Books
              </Text>
            </view>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: "24px",
              width: "85%",
              fontSize: 22,
              marginStart: 20,
              fontWeight: 400,
              color: "black",
            }}
          >
            Special Promotions
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            // height: "17%"
          }}
        >
          <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
            <Image
              style={styles1.categoryBox}
              source={require("../images/cake.png")}
            ></Image>
            <Image
              style={styles1.categoryBox}
              source={require("../images/flower.png")}
            ></Image>
            <Image
              style={styles1.categoryBox}
              source={require("../images/fruites.png")}
            ></Image>
          </ScrollView>
        </View>
        <View>
          <Footer />
        </View>
      </View>
    );
  }
}
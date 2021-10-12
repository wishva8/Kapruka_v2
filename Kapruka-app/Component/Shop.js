import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'

export default class Shop extends Component {


  render() {
    const styles = StyleSheet.create({
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
      <View style={{
        width: "100%",
        height: "100%",
        paddingTop: "25%",
        paddingBottom: "25%"
        // backgroundColor:"#000"
      }}>
        <View style={{
          flexDirection: "row",
          // height: "17%"
        }}>
          <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false}
          >
            <Image style={styles.categoryBox} source={require('../images/cake.png')}></Image>
            <Image style={styles.categoryBox} source={require('../images/flower.png')}></Image>
            <Image style={styles.categoryBox} source={require('../images/fruites.png')}></Image>
          </ScrollView>
        </View>

        <Text style={{
          fontSize: 35,
          fontWeight: 500,
          marginTop: 30,
          margin: 20
        }}>Cake</Text>


        <View style={{
          flexDirection: 'row',
          marginTop: 30,
          padding: 20,
          width: "100%"
        }}>
          <View style={{
            marginEnd: 10,
            width: "48%",
            height: "180px",
            backgroundColor: "#F2FBFF",
            borderRadius: "25px",
            borderColor: "#c4c4c4",
            borderWidth: 1
          }}>
            <Image
              style={{
                position: "absolute",
                left: 5,
                top: -40,
                width: "80%",
                height: "72%",
              }}
              source={require('../images/Blackforest_1.png')} />
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 50,
              fontSize: 16,
              fontWeight: 500
            }}>Black Forest 1kg</Text>
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 30,
              fontSize: 16,
              fontWeight: 500,
              color: "#C4C4C4",
            }}>Cake</Text>
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 8,
              fontSize: 16,
              fontWeight: 500
            }}>Rs.2,600</Text>
          </View>
          <View style={{
            marginEnd: 20,
            width: "48%",
            height: "180px",
            backgroundColor: "#F2FBFF",
            borderRadius: "25px",
            borderColor: "#c4c4c4",
            borderWidth: 1
          }}>
            <Image
              style={{
                position: "absolute",
                left: 5,
                top: -40,
                width: "80%",
                height: "72%",
              }}
              source={require('../images/Blackforest_2.png')} />
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 50,
              fontSize: 16,
              fontWeight: 500
            }}>Black Forest 1kg</Text>
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 30,
              fontSize: 16,
              fontWeight: 500,
              color: "#C4C4C4",
            }}>Cake</Text>
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 8,
              fontSize: 16,
              fontWeight: 500
            }}>Rs.2,600</Text>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 30,
          padding: 20,
          width: "100%"
        }}>
          <View style={{
            marginEnd: 10,
            width: "48%",
            height: "180px",
            backgroundColor: "#F2FBFF",
            borderRadius: "25px",
            borderColor: "#c4c4c4",
            borderWidth: 1
          }}>
            <Image
              style={{
                position: "absolute",
                left: 5,
                top: -40,
                width: "80%",
                height: "72%",
              }}
              source={require('../images/Blackforest_1.png')} />
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 50,
              fontSize: 16,
              fontWeight: 500
            }}>Black Forest 1kg</Text>
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 30,
              fontSize: 16,
              fontWeight: 500,
              color: "#C4C4C4",
            }}>Cake</Text>
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 8,
              fontSize: 16,
              fontWeight: 500
            }}>Rs.2,600</Text>
          </View>
          <View style={{
            marginEnd: 20,
            width: "48%",
            height: "180px",
            backgroundColor: "#F2FBFF",
            borderRadius: "25px",
            borderColor: "#c4c4c4",
            borderWidth: 1
          }}>
            <Image
              style={{
                position: "absolute",
                left: 5,
                top: -40,
                width: "80%",
                height: "72%",
              }}
              source={require('../images/Blackforest_2.png')} />
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 50,
              fontSize: 16,
              fontWeight: 500
            }}>Black Forest 1kg</Text>
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 30,
              fontSize: 16,
              fontWeight: 500,
              color: "#C4C4C4",
            }}>Cake</Text>
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 8,
              fontSize: 16,
              fontWeight: 500
            }}>Rs.2,600</Text>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 30,
          padding: 20,
          width: "100%"
        }}>
          <View style={{
            marginEnd: 10,
            width: "48%",
            height: "180px",
            backgroundColor: "#F2FBFF",
            borderRadius: "25px",
            borderColor: "#c4c4c4",
            borderWidth: 1
          }}>
            <Image
              style={{
                position: "absolute",
                left: 5,
                top: -40,
                width: "80%",
                height: "72%",
              }}
              source={require('../images/Blackforest_1.png')} />
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 50,
              fontSize: 16,
              fontWeight: 500
            }}>Black Forest 1kg</Text>
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 30,
              fontSize: 16,
              fontWeight: 500,
              color: "#C4C4C4",
            }}>Cake</Text>
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 8,
              fontSize: 16,
              fontWeight: 500
            }}>Rs.2,600</Text>
          </View>
          <View style={{
            marginEnd: 20,
            width: "48%",
            height: "180px",
            backgroundColor: "#F2FBFF",
            borderRadius: "25px",
            borderColor: "#c4c4c4",
            borderWidth: 1
          }}>
            <Image
              style={{
                position: "absolute",
                left: 5,
                top: -40,
                width: "80%",
                height: "72%",
              }}
              source={require('../images/Blackforest_2.png')} />
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 50,
              fontSize: 16,
              fontWeight: 500
            }}>Black Forest 1kg</Text>
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 30,
              fontSize: 16,
              fontWeight: 500,
              color: "#C4C4C4",
            }}>Cake</Text>
            <Text style={{
              position: "absolute",
              left: 15,
              bottom: 8,
              fontSize: 16,
              fontWeight: 500
            }}>Rs.2,600</Text>
          </View>
        </View>
      </View>
    )
  }
}

import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
// import { Rating, AirbnbRating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavHead from './NavHead';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Footer from './Footer';

export default function NewAddress() {
    return (
        <View style={{
            width: "100%",
            height: "100%",
        }}>
            {/* <View style={{
               width: "100%",
               height: "6.5%",
               backgroundColor: "#223F98",
               borderBottomEndRadius: 19,
               borderBottomStartRadius: 19,
               // shadowColor: '#171717', shadowOffset: { width: -2, height: 4 },
               shadowOpacity: 0.2,
               shadowRadius: 4,
            }
            }>
                 <Icon.Button 
                    name= "navicon" 
                    backgroundColor="#223F98"
                    style={
                        {
                            marginTop:3,
                            paddingLeft:14,
                            
                    }}
                /> */}

                {/* <Icon.Button 
                    name= "shopping-cart" 
                    backgroundColor="#223F98"
                    style={
                        {
                            marginTop:3,
                            paddingLeft:200,
                            
                    }}
                /> */}

                {/* <View style={{
                    flexDirection: "row",
                    width: "100%",
                    height: "100%",
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
      
                </View> */}
            {/* </View> */}

            {/* <NavHead/> */}

            <Text style={{
                fontSize: 22,
                marginStart: 25,
                marginTop: 20
            }}>Add New Address</Text>
            <View></View>
            <View style={{
                flexDirection: "row",
                marginStart: 20,
            }}>
                <TextInput placeholder="Home Name/Number" style={{
                    height: 40,
                    marginTop: 10,
                    width: "355px",
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: "8px",
                    borderColor: "#C4C4C4"
                }} />
            </View>
            <View style={{
                flexDirection: "row",
                marginStart: 20,
            }}>
                <TextInput placeholder="Street Adrress" style={{
                    height: 40,
                    marginTop: 10,
                    width: "355px",
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: "8px",
                    borderColor: "#C4C4C4"
                }} />
            </View>
            <View style={{
                flexDirection: "row",
                marginStart: 20,
            }}>
                <TextInput placeholder="City" style={{
                    height: 40,
                    marginTop: 10,
                    width: "355px",
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: "8px",
                    borderColor: "#C4C4C4"
                }} />
            </View>
            <View style={{
                flexDirection: "row",
                marginStart: 20,
            }}>
                <TextInput placeholder="Country" style={{
                    height: 40,
                    marginTop: 10,
                    width: "355px",
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: "8px",
                    borderColor: "#C4C4C4"
                }} />
            </View>
            <View style={{
                flexDirection: "row",
                marginStart: 20,
            }}>
                <TextInput placeholder="Nick Name" style={{
                    height: 40,
                    marginTop: 10,
                    width: "355px",
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: "8px",
                    borderColor: "#C4C4C4"
                }} />
            </View>
            <View style={{
                flexDirection: "row",
                marginStart: 20,
            }}>
                <TextInput placeholder="Phone" style={{
                    height: 40,
                    marginTop: 10,
                    width: "245px",
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: "8px",
                    borderColor: "#C4C4C4"
                }} />
                <TextInput placeholder="Postcode" style={{
                    height: 40,
                    marginTop: 10,
                    marginLeft: 10,
                    width: "100px",
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: "8px",
                    borderColor: "#C4C4C4"
                }} />
            </View>
            <View style={{
                flexDirection: "row",
                marginStart: 20,
            }}>
                <TextInput placeholder="Email" style={{
                    height: 40,
                    marginTop: 10,
                    width: "355px",
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: "8px",
                    borderColor: "#C4C4C4"
                }} />
            </View>

            <View style={{
                flexDirection: "row",
                marginStart: 255,
                marginTop: 25,
            }} >

                <Icon.Button
                backgroundColor="none"
                    style={{
                        borderRadius: "15px",
                        width: "120px",
                        height: "35px",
                        textAlign: "center",
                        backgroundColor: "#223F98",
                        paddingLeft: "35px",
                        fontWeight: 300,
                        fontSize: "30px"
                    }}
                >Add</Icon.Button>
            </View >
            <View
      style={{
        paddingTop:"20%"
      }}>
      <MaterialCommunityIcons
      name="keyboard-backspace"
      color="black"
      size="300%"
      style={{
        width:"10%"
      }}>
      
      
      </MaterialCommunityIcons>
      <Text
        style={{
          fontSize: 15,
          paddingLeft: 50,
          marginTop: -35,
          color: "#223F98",
        }}
      >
        Continue Shopping
      </Text>
      </View>
      <Footer/>
        </View>
    )
}

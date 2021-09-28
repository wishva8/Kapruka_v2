import React from 'react'
import { View, Text, Image } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Product() {
    return (
        <View style={{
            width: "100%",
            height: "100%",
        }}>
            <View style={{
                width: "100%",
                height: "45%",
                backgroundColor: "#DBF4FF",
                borderBottomEndRadius: 25,
                borderBottomStartRadius: 25,
                shadowColor: '#171717', shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            }
            }>
                <View style={{
                    marginTop: 20,
                    width: "100%",
                }}><Text>asda</Text></View>
                <View style={{
                    flexDirection: "row",
                    width: "100%",
                    height: "100%",
                    justifyContent: 'center',

                }}>
                    <Image style={{
                        width: "50%",
                        height: "55%",

                    }} source={require('../images/Blackforest_2.png')} />
                </View>
            </View>

            <Text style={{
                fontSize: 24,
                marginStart: 20,
                marginTop: 20,
                fontWeight: 500
            }}>Cake - Black Forest 1kg</Text>

            <View style={{
                flexDirection: "row",
                marginStart: 20,
            }}>

                <View style={{
                    alignItems: 'start',
                    width: "50%",
                    justifyContent: 'flex-start'
                    // flexDirection: "col",
                }}>
                    <Rating
                        // showRating
                        onFinishRating={5}
                        imageSize={20}
                        style={{ paddingVertical: 6 }}

                    />
                </View>
                <View style={{
                    // flexDirection: "col",
                    alignItems: 'end',
                    width: "50%",
                    justifyContent: 'flex-end'
                }}>
                    <Icon.Button name="heart" backgroundColor="none" color="red">

                    </Icon.Button>
                </View>

            </View>
            <View style={{
                flexDirection: "row",
                marginStart: 20,
                marginEnd: 20
            }}>
                <View style={{
                    alignItems: 'start',
                    width: "50%",
                    justifyContent: 'flex-start'
                    // flexDirection: "col",
                }}>
                    <Text style={{
                        fontSize: 22,
                        marginTop: 8,

                        fontWeight: 500
                    }}>RS.2,600</Text>
                </View>
                <View style={{
                    // flexDirection: "col",
                    alignItems: 'end',
                    width: "50%",
                    justifyContent: 'flex-end'
                }}>
                    <View style={{
                        flexDirection: "row",

                    }}>
                        <Icon.Button name="plus" backgroundColor="#223F98" borderRadius={15} size={15} color="#fff" style={{
                            width: 30,
                            height: 30,
                            //Below lines will help to set the border radius
                            borderBottomLeftRadius: 30,
                            borderBottomRightRadius: 30,
                            borderTopRightRadius: 30,
                            borderTopLeftRadius: 30,
                            overflow: 'hidden',
                        }}>

                        </Icon.Button>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 500,
                            marginStart: 10,
                            marginEnd: 10
                        }}>01</Text>
                        <Icon.Button name="minus" backgroundColor="#223F98" borderRadius={15} size={15} color="#fff" style={{
                            width: 30,
                            height: 30,
                            //Below lines will help to set the border radius
                            // borderBottomLeftRadius: 30,
                            // borderBottomRightRadius: 30,
                            // borderTopRightRadius: 30,
                            // borderTopLeftRadius: 30,
                            overflow: 'hidden',
                        }}>

                        </Icon.Button>
                    </View>
                </View>
            </View>
            <View style={{
                // flexDirection: "row",
                marginStart: 20,
                marginTop: 30
            }}><Text style={{
                fontSize: 20,
                fontWeight: 500,
            }}>Product Detail</Text>
                <Text style={{
                    marginTop: 10
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at elit id nibh convallis ullamcorper. Curabitur convallis volutpat egestas.
                </Text>
            </View>
        </View >
    )
}

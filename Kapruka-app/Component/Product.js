import React from 'react'
import { View, Text, Image } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';

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
        <View><Text>asda</Text></View>
        <View style={{
          flexDirection: "row",
          width: "100%",
          height: "100%",
          justifyContent: 'center',
          alignItems: 'center',

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
        marginTop: 8
      }}>Product Name</Text>
      <View></View>
      <View style={{
        flexDirection: "row",
        marginStart: 20,
      }}>
        <View style={{
          flexDirection: "col",
        }}><Rating
            // showRating
            onFinishRating={5}
            imageSize={20}
            style={{ paddingVertical: 6 }}

          /></View>
        <View style={{
          flexDirection: "col",
        }}>
          <Text>sad</Text>
        </View>
      </View>
    </View >
  )
}

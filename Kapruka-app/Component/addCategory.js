import React, { Component } from 'react'
import { Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native'
// import {ImagePicker,launchImageLibrary} from "react-native-image-picker"
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker'
export default class AddCategory extends Component {

  handelChoosePhoto = () => {
    const option = {}
    console.log("test");
    launchImageLibrary(option, response => {
      console.log(response);
    })

  }

  render() {
    return (
      <View style={{
        width: "100%",
        height: "100%",
        marginTop:"20%",
        padding: 20
      }}>
        <Text style={{
          fontSize: 24
        }}>Add Category</Text>




        <Button
          color="none"
          style={{
            backgroundColoer: "none"
          }}
          onPress={this.handelChoosePhoto}

        >
          <Image></Image>

        </Button>

        <View style={{
          flexDirection: "row",
        }}>

          <TextInput
            placeholder="Name"
            style={{
              height: 40,
              marginTop: 25,
              margin: 12,
              width: "100%",
              borderWidth: 1,
              padding: 10,
              borderRadius: "8px",
              borderColor: "#C4C4C4",
              alignContent: 'center'
            }}></TextInput>

        </View>
        <View style={{
          flexDirection: "row",
        }}>
          <TextInput
            placeholder="Description"
            style={{
              height: 40,
              marginTop: 10,
              margin: 12,
              width: "100%",
              borderWidth: 1,
              padding: 10,
              borderRadius: "8px",
              borderColor: "#C4C4C4",
              alignContent: 'center'
            }}></TextInput>

        </View>
        <View style={{
          flexDirection: "row",
          padding: 15
        }}>
          <View style={{
            flexDirection: "column",
            width: "40%",
            

          }}>

            <Button
              width="100%"
              title="Reset"
              color="#223F98"
              style={{


              }}
            />
          </View>
          <View style={{
            flexDirection: "column",
            width: "20%",

          }}></View>
          <View style={{
            flexDirection: "column",
            width: "40%",

          }}>

            <Button
              width="100%"
              title="Add"
              color="#223F98"
              style={{


              }}
            />
          </View>


        </View>

      </View>
    )
  }
}

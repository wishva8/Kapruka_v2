import React, { Component } from 'react'
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
export default class AddProduct extends Component {
  handelChoosePhoto = () => {
    const option = {}
    console.log("test");
    // launchImageLibrary(option, response => {
    //   console.log(response);
    // })

  }
  render() {
    return (
      <View style={{
        width: "100%",
        height: "100%",
        paddingTop: "20%",
        padding: 20
      }}>
        <Text style={{
          fontSize: 24
        }}>Add Product</Text>



        <TouchableOpacity
          onPress={this.handelChoosePhoto}
          style={{
            borderRadius: 10,
            marginTop: 45,
            margin: 12,
            padding: "20%",
            borderColor: "#C4C4C4",
            borderWidth: 1,
            height: "30%",
            alignItems: "center",

          }}>
          
          <Text style={{
            marginTop: "auto",
            marginBottom: "auto",
          }}>
            Upload background image
          </Text>
        </TouchableOpacity>

       

        <View style={{
          flexDirection: "row",
        }}>

          <TextInput
            placeholder="Name"
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
        }}>
          <TextInput
            placeholder="Quantity"
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
        }}>
          <TextInput
            placeholder="Price"
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

import React from 'react'
import { View, Text, Image,SafeAreaView, StyleSheet, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Register(){
    return (
        <View style={{
            width: "100%",
            height: "100%",
        }}>
            <View style={{
                flexDirection:"row",
                // width: "100%",
                // height: "6.5%",
                // backgroundColor: "#223F98",
                // borderBottomEndRadius: 19,
                // borderBottomStartRadius: 19,
                // // shadowColor: '#171717', shadowOffset: { width: -2, height: 4 },
                // shadowOpacity: 0.2,
                // shadowRadius: 4,
            }
            }>

                <Icon.Button 
                    name= "navicon" 
                    backgroundColor="223F98"
                    style={
                        {
                            marginTop:3,
                            paddingLeft:14,
                            
                    }}
                />

                <Icon.Button 
                    name= "shopping-cart" 
                    backgroundColor="223F98"
                    style={
                        {
                            marginTop:3,
                            paddingLeft:300,
                            
                    }}
                />
               
            </View>

            <View style={{
                    flexDirection:"column",
                    width: "443px",
                    height: "242px",
                    alignItems:"center",
                    marginLeft:"-26px",
                    marginTop:"-37px"
                    

                }}>
                
                    <Image style={{
                        width: "75%",
                        height: "55%",
                        marginTop:"75px",
                        marginLeft:"100p"

                    }} source={require('../images/Kapruka-Logo-1024x441 1.png')} />
            
                <Text style={{
                    fontSize:"24px",
                    width: "85%",
                    fontSize: 24,
                    marginStart: 20,
                    marginTop: "46px",
                    fontWeight: 400
                }}>Sign Up</Text>

                    <TextInput placeholder="First Name" style = {{
                        height: 40,
                        marginTop:25,
                        margin: 12,
                        width:"355px",
                        borderWidth:1,
                        padding:10,
                        borderRadius:"8px",
                        borderColor:"#C4C4C4"
                    }}>

                    </TextInput>

                    <TextInput placeholder="Last Name"  style = {{
                        height: 40,
                        marginTop:2,
                        margin: 12,
                        width:"355px",
                        borderWidth:1,
                        padding:10,
                        borderRadius:"8px",
                        borderColor:"#C4C4C4"
                        
                    }}>
                        
                    </TextInput>

                    <TextInput placeholder="Email"  style = {{
                        height: 40,
                        marginTop:2,
                        margin: 12,
                        width:"355px",
                        borderWidth:1,
                        padding:10,
                        borderRadius:"8px",
                        borderColor:"#C4C4C4"
                        
                    }}>
                        
                    </TextInput>

                    <TextInput placeholder="Password"  style = {{
                        height: 40,
                        marginTop:2,
                        margin: 12,
                        width:"355px",
                        borderWidth:1,
                        padding:10,
                        borderRadius:"8px",
                        borderColor:"#C4C4C4"
                        
                    }}>
                        
                    </TextInput>
                    <TextInput placeholder="Confirm Password"  style = {{
                        height: 40,
                        marginTop:2,
                        margin: 12,
                        width:"355px",
                        borderWidth:1,
                        padding:10,
                        borderRadius:"8px",
                        borderColor:"#C4C4C4"
                        
                    }}>
                        
                    </TextInput>
      
                    <View
                        style={{
                            paddingLeft:"195px",
                            marginTop:"10px",
                            flexDirection:"row"
                    }}>
                        
                            <Icon.Button
                                style={{
                                    borderRadius:"8px",
                                    width:"156px",
                                    height:"35px",
                                    textAlign:"center",
                                    backgroundColor:"#223F98",
                                    paddingLeft:"40px",
                                    color:"#223F98",
                                    backgroundColor:"#223F98",
                                    fontWeight:300,
                                    fontSize:"30px"
                                    
                                }}
                            >Sign Up</Icon.Button>
                    </View> 
            </View>
        </View >
    )
}
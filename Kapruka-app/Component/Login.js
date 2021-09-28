import React from 'react'
import { View, Text, Image,SafeAreaView, StyleSheet, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Login(){
    return (
        <View style={{
            width: "100%",
            height: "100%",
        }}>
            <View style={{
                flexDirection:"row",
                
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
                }}>Sign In</Text>

                    <TextInput placeholder="Email" style = {{
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
      
                    <View
                        style={{
                            paddingLeft:"178px",
                            marginTop:"8px",
                            flexDirection:"row"
                    }}>
                        <Text
                        style={{
                            marginLeft:"-170px",
                            paddingRight:"90px",
                            fontSize:"12px",
                            marginTop:"9px",
                            color:"#787878"

                        }}
                        >Forgot Password?</Text>
                            <Icon.Button
                                style={{
                                    borderRadius:"8px",
                                    width:"156px",
                                    height:"35px",
                                    textAlign:"center",
                                    backgroundColor:"#223F98",
                                    paddingLeft:"45px",
                                    color:"#223F98",
                                    backgroundColor:"#223F98",
                                    fontWeight:300,
                                    fontSize:"30px"
                                    
                                }}
                            >Sign In</Icon.Button>
                    </View>

                    <View
                        style={{flexDirection:"row"}}
                    >
                        <Text
                            style={{
                                alignContent:"center",
                                paddingRight:"5px",
                                fontSize:"12px",
                                marginTop:"85px",
                                color:"#787878"

                            }}
                            >Do not hace a Kapruka Account?</Text>

                        <Text
                            style={{
                                alignContent:"center",
                                paddingLeft:"50px",
                                fontSize:"14px",
                                marginTop:"84px",
                                color:"#223F98"

                            }}
                            >Sign Up</Text>

                    </View>
            </View>

            

        </View >
    )
}
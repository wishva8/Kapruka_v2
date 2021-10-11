import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Product from "./Component/Product";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Cart from "./Component/Cart";
import Footer from "./Component/Footer";
import NavHead from "./Component/NavHead";
import Shop from "./Component/shop";
import AddCategory from "./Component/AddCategory"
import AddProduct from "./Component/AddProduct";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createAppContainer} from 'react-navigation';
// import { createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './Component/Home'

// const AppNavigator = createStackNavigator({
//  Home: {
//     screen: Home
//   },
//   Shop: {
//     screen: Shop
//   }, 
// },{
// },{ initialRouteName: "Home" });

// const AppContainer = createAppContainer(AppNavigator);
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavHead />
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}>

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="AddProduct" component={AddProduct} />
        <Tab.Screen name="Shop" component={Shop} />

      </Tab.Navigator>
      <Footer navigation={Tab} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
});

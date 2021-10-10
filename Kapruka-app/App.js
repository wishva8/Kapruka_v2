import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Product from './Component/Product';
import Login from './Component/Login';
import Register from './Component/Register';
import AddCategory from './Component/AddCategory';
import AddProduct from './Component/AddProduct';
import Shop from './Component/Shop';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <Product/> */}
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      {/* <Product></Product> */}
      {/* <AddCategory></AddCategory> */}
      {/* <AddProduct/> */}
      <Shop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

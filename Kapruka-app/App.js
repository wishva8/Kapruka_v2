import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Product from "./Component/Product";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Cart from "./Component/Cart";
import Footer from "./Component/Footer";
import NavHead from "./Component/NavHead";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <Product/> */}
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      {/* <Product></Product> */}
      <Cart></Cart>
      {/* <NavHead></NavHead> */}
      {/* <Footer></Footer> */}
    </View>
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

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Product from "./Component/Product";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Cart from "./Component/Cart";
import Footer from "./Component/Footer";
import NavHead from "./Component/NavHead";
import Home from "./Component/Home";
import Shop from "./Component/Shop"
import DeliveryDetails from "./Component/DeliveryDetails";
import NewAddress from "./Component/NewAddress";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { color } from "react-native-reanimated";
import SideNavItems from "./Component/SideNavItems";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        headerShown:true,
        headerTitle: '',
        headerStyle: {
          width: "100%",
          backgroundColor: "#223F98",
          borderBottomEndRadius: 25,
          borderBottomStartRadius: 25,
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          position: "fixed",
        },
      }}
      >
        {
          SideNavItems.map(drawer=><Drawer.Screen
            key={drawer.name}
            name={drawer.name}
            options={{
              drawerIcon:({focused})=>
              drawer.iconType==='FontAwesome' ?
              <FontAwesome
              name={drawer.iconName}
              size={24}
              color="black"
              />
              :
              <FontAwesome
              name={drawer.iconName}
              size={24}
              color="black"
              />
              ,
              headerShown:true,
              // header:({ scene }) => {
              //   const { options } = scene;
              //   const title =
              //   options.headerTitle !== undefined 
              //   ? options.headerTitle
              //   : options.title !== undefined
              //   ? options.title
              //   : scene.route.name;

              //   return (
              //     <Header screen={title}/>
              //   );
              // }
            }}
            component={
              drawer.name==='Cakes' ? DeliveryDetails
              : drawer.name==='Grocery' ? NewAddress
              : drawer.name=== 'Toys' ? Shop
              : drawer.name=== 'Flowers' ? Product
              : drawer.name=== 'Hampers' ? Product
              : drawer.name=== 'Clothes' ? Product
              : drawer.name=== 'Shoes' ? Product
              : drawer.name=== 'Books' ? Product
              : Home
            }
            />)
          }
        {/* <Drawer.Screen
        name="Cakes"
        component={DeliveryDetails}
        />
        <Drawer.Screen
        name="Groceries"
        component={NewAddress}
        />
        <Drawer.Screen
        name="Toys"
        component={Shop}
        />
        <Drawer.Screen
        name="Chocolates"
        component={Product}
        />
        <Drawer.Screen
        name="Electronics"
        component={Product}
        /> */}
      </Drawer.Navigator>
    </NavigationContainer>


    // // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" /> */}
    //   {/* <Product/> */}
    //   {/* <Register></Register> */}
    //   {/* <Login></Login> */}
    //   {/* <Product></Product> */}
    //   {/* <Cart></Cart> */}
    //   {/* <NavHead></NavHead> */}
    //   {/* <Home></Home> */}
    //   {/* <Footer></Footer> */}
    //   {/* <Shop/> */}
    //   {/* <NewAddress/> */}
    //   {/* <DeliveryDetails/> */}
    // // </View>
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

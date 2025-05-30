import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { navigationRef } from './RootNavigation';

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CheckoutScreen from "../screens/CheckoutScreen/CheckoutScreen";
import AddToCartScreen from "../screens/AddToCart/AddToCartScreen";

const Stack = createNativeStackNavigator();

class StackNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='CheckoutScreen'
            component={CheckoutScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='AddToCartScreen'
            component={AddToCartScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default StackNavigator;

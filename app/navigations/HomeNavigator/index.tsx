import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import Payment from "../../screens/Payment";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Payment"
      component={Payment}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;

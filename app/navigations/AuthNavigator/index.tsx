import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../../screens/SignIn";
import SignUp from "../../screens/SignUp";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Sign In"
      component={SignIn}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Sign Up"
      component={SignUp}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;

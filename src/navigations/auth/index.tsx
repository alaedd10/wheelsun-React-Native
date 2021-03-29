import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from '../../screens/auth/SignIn'
import SignUp from '../../screens/auth/SignUp'

const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
    return (
        <Tab.Navigator 
         initialRouteName="SignIn">
            <Tab.Screen name='SignIn' component={SignIn} /> 
            <Tab.Screen  name='SignUp' component={SignUp} />
        </Tab.Navigator>
    )
}


export {
    AuthNavigator
} 
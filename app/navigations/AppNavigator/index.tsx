import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import Profile from "../../screens/Profile";
import News from "../../screens/News";
import HomeNavigator from "../HomeNavigator";
import Help from "../../screens/Help";
import { Strings } from "../../constants";
import GlobalContext from "../../contexts/GlobalContext";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { language } = useContext(GlobalContext);
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: "rgba(71, 84, 92, 0.7)",
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name={Strings[language].tabNavigator.homeTab}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bicycle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Strings[language].tabNavigator.newsTab}
        component={News}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="newsletter" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={Strings[language].tabNavigator.profileTab}
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Strings[language].tabNavigator.helpTab}
        component={Help}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

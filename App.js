import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./screens/HomeScreen";
import ChatStackScreen from "./screens/ChatScreen";
import SettingScreen from "./screens/SettingScreen";
//import Pingbutton from './screens/Pingbutton';
import ChatScreen from "./screens/InChat";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "brown",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Chats" component={ChatStackScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
        <Tab.Screen name="Talk" component={ChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

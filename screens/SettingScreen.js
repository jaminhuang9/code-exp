import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const SETTINGS_LIST = [
  { title: " General ", id: "0", set: false },
  { title: " Notifications ", id: "1", set: false },
  { title: " Privacy ", id: "2", set: false },
  { title: " Language ", id: "3", set: true },
  { title: " Profile ", id: "4", set: true },
];

function Settinglist() {
  const [Settings, setSettings] = useState(SETTINGS_LIST);
  useEffect(() => {});

  function renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.listItem}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList style={styles.list} data={Settings} renderItem={renderItem} />
    </View>
  );
}

export default function SettingScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settinglist}
        options={{
          headerTitle: "Settings",
          headerStyle: {
            backgroundColor: "silver",
            height: 100,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
  },
  listItem: {
    height: 40,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    paddingLeft: 10,
  },
});

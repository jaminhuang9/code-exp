import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";

const Stack = createStackNavigator();

const db = SQLite.openDatabase("chats.db");

// example list of chats on chatscreen
const SAMPLE_CHATS = [
  {
    title: "Rhino",
    id: "0",
    status: "unread",
    messageText: "Hello!",
    messageTime: "3 mins ago",
  },
  {
    title: "Lion",
    id: "1",
    status: "read",
    messageText: "Welcome!",
    messageTime: "40 mins ago",
  },
  {
    title: "Penguin",
    id: "2",
    status: "unread",
    messageText: "How are you!",
    messageTime: "2 hours ago",
  },
  {
    title: "Panda",
    id: "3",
    status: "read",
    messageText: "Hi!",
    messageTime: "10 hours ago",
  },
  {
    title: "Pigeon",
    id: "4",
    status: "read",
    messageText: "Nice to meet you!",
    messageTime: "1 day ago",
  },
];

//function to create screen filled with chats.
function Chatlist({ navigation, route }) {
  const [chats, setChats] = useState(SAMPLE_CHATS);

  // useEffect(() => {
  //     navigation.setOptions({
  //         headerRight: () => (
  //             <TouchableOpacity onPress = {navigation.navigate("Add")}>
  //                 <Entypo name = "New chat" size = {10} color = "black"/>
  //             </TouchableOpacity>
  //         ),
  //     });
  // });

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Talk", { name: item.title })}
        style={styles.listItem}
      >
        <View style={styles.UserInfo}>
          <View style={styles.TextSection}>
            <View style={styles.UserInfoText}>
              <Text style={styles.title}> {item.title} </Text>
              <Text style={styles.postTime}> {item.messageTime} </Text>
            </View>
            <Text style={styles.message}> {item.messageText} </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList style={styles.list} data={chats} renderItem={renderItem} />
    </View>
  );
}

//Create a chatstack
const ChatStack = createStackNavigator();

function ChatScreen() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="Chat"
        component={Chatlist}
        options={{
          headerTitle: "Existing-Chats",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          headerShown: false,
        }}
      />
    </ChatStack.Navigator>
  );
}

export default function ChatStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chatfile"
        component={ChatScreen}
        options={{
          headerTitle: "Chats",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          //headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  // Text: {
  //   color: "darkgray",
  //   fontWeight: "bold",
  //   fontSize: 8,
  // },

  listItem: {
    height: 60,
    justifyContent: "center",
    borderBottomColor: "#999",
    borderBottomWidth: 1,
    paddingLeft: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
  },
  headerStyle: {
    backgroundColor: "mediumpurple",
    height: 100,
  },
  headerTitleStyle: {
    fontSize: 40,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Calibri",
  },
  message: {
    fontSize: 16,
    color: "black",
    fontFamily: "Calibri",
  },
  postTime: {
    fontSize: 14,
    color: "dimgray",
    fontFamily: "Calibri",
  },
  UserInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  UserInfoText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  TextSection: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
});

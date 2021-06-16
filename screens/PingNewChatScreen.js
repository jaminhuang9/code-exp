import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Flatlist, Button} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createStackNavigator } from "@react-navigation/stack"; 

const AddChatStack = createStackNavigator(); 

export default function PingChat({navigation }) {
    return (
        <View style = {{justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue'}}>
            <Text style = {{fontSize: 40, fontWeight: 'bold'}}>Finding new ping...</Text>
        </View>
    )
}
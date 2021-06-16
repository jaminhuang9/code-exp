import { StatusBar } from 'expo-status-bar';
import React, {useEffect, } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from "@react-navigation/native"; 
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import PingChat from './PingNewChatScreen';
//add function from addchatstack to transfer the stack to homescreen

const Stack = createStackNavigator(); 

function HomeScreen({navigation }) {

    //need to include a function or useEffect for a button. 
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress = {pingFunction}>
                    <Ionicons name="add-circle" size={24} color="black" 
                        style = {{
                            color: "deepskyblue",
                            marginRight: 10, 
                        }} />
                </TouchableOpacity>
            ),
            
             
        });
    });

    function pingFunction() {
        navigation.navigate("AddChatStack"); 
    }

    return ( 
        <View style = {{flex: 1, justifyContent: "center", alignItem: "Center"}}>
            <Text style = {styles.Text} >Welcome to (App name!)</Text>
        </View>
    );
}



// add two stack screens one for homescreen and the other for ping screen. 
export default function HomeStackScreen() {
    return (
    <Stack.Navigator mode = 'modal'>
        <Stack.Screen 
            name = "Home" 
            component = {HomeScreen}
            options = {{
                title: "HomeScreen", 
                headerStyle: styles.headerStyle, 
                headerTintColor: 'maroon', 
                headerTintStyle: styles.headerTintStyle,
            }}/>
        <Stack.Screen name = 'AddChatStack' component = {PingChat}/>
    </Stack.Navigator>
    )
}

const styles = StyleSheet.create( {
    container: {
        flex: 1, 
        backgroundColor: 'lightgray', 
        alignItems: 'center', 
        justifyContent: 'center', 
    }, 
    Text: {
        color: 'black', 
        fontWeight: 'bold', 
        fontSize: 20, 
    }, 
    
    headerStyle: {
        backgroundColor: 'royalblue', 
        height: 100, 
        shadowColor: 'black', 
        shadowOpacity: 0.2, 
        shadowRadius: 5, 
    }, 
    headerTitleStyle: {
        fontSize: 20, 
        fontWeight: 'bold', 
    },
})
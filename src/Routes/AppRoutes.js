import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Pages/Home'
import Profile from "../Pages/Profile";
import Icon from 'react-native-vector-icons/Feather'
import DegradeSelect from "../Pages/DegradeSelect";
import Ball from "../Exercicios/Ball";
import Petalas from "../Exercicios/Petala";
import Rosa from "../Exercicios/Rosa";
import Videoa from "../Components/WebView";
import Maca from "../Exercicios/Maca";

export default function AppRoutes(){
    const Stack = createNativeStackNavigator();
    const Tabs  =createBottomTabNavigator();


    function loadStacks(){
        return(
            <Stack.Navigator>
                <Stack.Screen 
                    options={{
                        headerShown:false
                    }}
                    name="Home" 
                    component={Home}/>

            <Stack.Screen
            component={DegradeSelect}
            name="Degrade"
            options={{
                headerShown:false
            }}
            />

            <Stack.Screen
            component={Ball}
            name="Bola"
            options={{
                headerShown:false
            }}
            />

            <Stack.Screen
            component={Petalas}
            name="Pétala"
            options={{
                headerShown:false
            }}
            />


            <Stack.Screen
            component={Rosa}
            name="Rosa"
            options={{
                headerShown:false
            }}
            />

            <Stack.Screen
            component={Maca}
            name="Maçã"
            options={{
                headerShown:false
            }}
            />

            <Stack.Screen
            component={Videoa}
            name="WebView"
            options={{
                headerTitle:"voltar",
                headerTintColor:"#fff",
                headerStyle:{
                    backgroundColor:"#000"
                }
            }}
            />
            

            </Stack.Navigator>
        )
    }

    return(
        <Tabs.Navigator
        screenOptions={{
            headerShown:false,
            tabBarHideOnKeyboard:true,
            tabBarActiveTintColor:'red',
            tabBarInactiveTintColor:"#A9BCD0",
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor:"#000",
                borderTopWidth:2,
                borderTopColor:'#000'
            }
        }}>
            <Tabs.Screen 
             options={{
                tabBarIcon:(({color, size})=>{
                    return (<Icon name="edit-2" color={color} size={size}/>)
                })
            }}
            name="AreaEx" 
            component={loadStacks}/>

            <Tabs.Screen 
            options={{
                tabBarIcon:(({color, size})=>{
                    return (<Icon name="user" color={color} size={size}/>)
                })
            }}
            name="profile" 
            component={Profile}/>
        </Tabs.Navigator>

    )
}
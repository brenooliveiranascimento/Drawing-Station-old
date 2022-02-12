import React, { useState, useContext } from "react";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import { AuthContext } from '../Contexts/index'
import { ActivityIndicator, ImageBackground, View } from "react-native";

export default function Routes(){

    const { verify, loading } = useContext(AuthContext);

    if(loading){
        return(
            <ImageBackground
            source={require('../assets/backgrounddegrade1.png')}
            style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <ActivityIndicator size={50} color="#fff"/>
            </ImageBackground>
        )
    }
    
    return(
        verify ? <AppRoutes/> : <AuthRoutes/>
    )
}
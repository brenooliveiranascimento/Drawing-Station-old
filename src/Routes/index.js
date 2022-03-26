import React, { useState, useContext, useEffect } from "react";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import { AuthContext } from '../Contexts/index'
import { ActivityIndicator, ImageBackground, View } from "react-native";
import firestore from '@react-native-firebase/firestore'
import DisableRoute from "./DisableRoute";

export default function Routes(){

    const [ disable, setDisable ] = useState(true);

    useEffect(()=>{
        firestore().collection('Avisos').doc('permisao').get().then((snapshot)=>{
            if(snapshot.data().ver === true){
                setDisable(true)
                return;
            }
            setDisable(false)
        })
    },[])

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

    if(!disable){
        return <DisableRoute/>
    }
    
    return(
        verify ? <AppRoutes/> : <AuthRoutes/>
    )
}
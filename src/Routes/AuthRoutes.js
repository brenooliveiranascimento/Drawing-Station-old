import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../Pages/SignIn'

export default function AuthRoutes(){
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen 
            options={{
                headerShown:false
            }}
            name="SignIn" 
            component={SignIn}/>
        </Stack.Navigator>

    )
}
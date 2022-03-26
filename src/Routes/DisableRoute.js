import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UnablePage from "../Pages/DegradeSelect/UnablePage";

export default function DisableRoute(){
  const Stack = createNativeStackNavigator()
  return(
    <Stack.Navigator>
      <Stack.Screen name="Unable" component={UnablePage}/>
    </Stack.Navigator>
  )
}
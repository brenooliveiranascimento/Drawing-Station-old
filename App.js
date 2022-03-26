import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/Routes';
import AuthProvider from './src/Contexts';
import ExercicioProvider from './src/Contexts/Api';
import { createAnimatableComponent } from 'react-native-animatable';

export default function App() {

  console.disableYellowBox=true
 return (
   <NavigationContainer>
     <StatusBar hidden={true}/>
     <ExercicioProvider>

     <AuthProvider>
      <Routes/>
     </AuthProvider>
     </ExercicioProvider>
   </NavigationContainer>
  );
}
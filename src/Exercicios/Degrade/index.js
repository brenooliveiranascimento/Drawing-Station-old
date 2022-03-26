import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ExerContext } from '../../Contexts/Api';


export default function Degrade() {
  const { degradeVermelho } = useContext(ExerContext)
 return (
   <View>
     <Text style={{color:'#fff'}}>{degradeVermelho.cor}</Text>
   </View>
  );
}
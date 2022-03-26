import React from 'react';
import { View, Text } from 'react-native';

export default function Msg() {
 return (
    <View style={{
        alignItems:'center',
        justifyContent:'center',
        flex:1
      }}>
         <Text style={{folor:"#fff", fontSize:200}}>escolha qual nivel</Text>
      </View>
  );
}
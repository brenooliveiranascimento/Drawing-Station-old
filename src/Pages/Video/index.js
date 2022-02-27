import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function VideoAula(){
    return(
        <View>
            
        </View>

        );
}

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    video: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
      }
})
import React, { useCallback, useLayoutEffect, useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../Contexts';
import firestore from '@react-native-firebase/firestore'

export default function Profile() {

  const { user, signOut } = useContext(AuthContext);

  const [nowUser, setNowUser] = useState()
  
  useLayoutEffect(
    useCallback(()=>{
      function loadProgress(){
          firestore().collection('users').doc(user.uid).get().then(snapshot=>{
            setNowUser(snapshot.data().name)
          })
      }
      loadProgress()
    })
  )
 return (
   <View>
       <Text>{nowUser}</Text>
       <Button
       onPress={signOut}
       title='sair'
       />
   </View>
  );
}
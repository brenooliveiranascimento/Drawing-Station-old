import React, { useState, useContext, useLayoutEffect, useCallback } from 'react';
import { View, Text, Image } from 'react-native';
import { ExerContext } from '../../../Contexts/Api';
import { BtnCheck, InfArea, Lapis, LapisArea, LapisText, TextBtn } from '../styles';
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Feather'
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../../Contexts/index'

export default function Azul({}) {

  const { user, updateProgress } = useContext(AuthContext)
  const [checkAzul, setCheckAzul] = useState(false)
  const [loadingInf, setLoadingInf] = useState(true);

  function update(){
    if( checkAzul ){
      updateProgress('degB')
      setCheckAzul(false)
      return
    }
    updateProgress('degB')
    setCheckAzul(true)
  }

  useLayoutEffect(
    useCallback(()=>{
      async function loadCheck(){
        await firestore().collection('users').doc(user.uid).get().then(snapshot=>{
          if(snapshot.data().degB === 1){
            setCheckAzul(true)
          }
          setLoadingInf(false)
        })
      }
      loadCheck()
    },[])
  )


  const InfAnimed = Animatable.createAnimatableComponent(InfArea);
  const LapisAnime = Animatable.createAnimatableComponent(LapisArea);

  const cores = [
    {cor:'Preto'},
    {cor:'cinza Escuro'},
    {cor:'Azul turquesa'},
    {cor:'Azul real'},
    {cor:'azul'},
    {cor:'Branco'},
  ]

  const { degradeAzul } = useContext(ExerContext)

  if(loadingInf){
    return(<View/>)
  }

return (
   <View>
     <LapisAnime
     animation='bounceInRight'
     >
       {
         cores.map( cores =>{
           return(
             <Lapis>
               <LapisText> <Icon name='edit-2' color={"#fff"} size={20}/>{cores.cor}</LapisText>
             </Lapis>
           )
         })
       }
     </LapisAnime>
     {
       degradeAzul.map( v =>{
         return(
           <InfAnimed
           key={v.descricao}
           animation='bounceInUp'
           >
             <Text
              style={{color:"#fff", fontSize:25, fontWeight:'bold', marginBottom:10}}>
             {v.cor}
             </Text>
              <Image
              style={{width:250, height:250, borderRadius:10, borderWidth:2, borderColor:'#ddd', marginBottom:20}}
              source={{uri:v.url}}
              />

              <TextBtn>
                {v.descricao}
              </TextBtn>
           </InfAnimed>
         
         )
       })
     }
     <View style={{
       alignItems:'center',
       justifyContent:'center',
       margin:20
     }}>
      <BtnCheck
      onPress={update}
      >
        <Icon
        size={30}
        color="#fff"
        name={ checkAzul ? "check-circle" : "circle" }
        />
      </BtnCheck>
     </View>

   </View>
  );
}


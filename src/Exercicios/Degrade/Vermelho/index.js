import React, { useState, useContext, useLayoutEffect, useCallback } from 'react';
import { View, Text, Image } from 'react-native';
import { ExerContext } from '../../../Contexts/Api';
import { BtnCheck, InfArea, Lapis, LapisArea, LapisText, TextBtn } from '../styles';
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Feather'
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../../Contexts/index'

export default function Vermelho({changePlus, changeMenos}) {

  const { user, updateProgress } = useContext(AuthContext)
  const [checkVermelho, setCheckVermelho] = useState(false)
  const [loadingInf, setLoadingInf] = useState(true);
  const name = 'degR'

  function update(){
    if( checkVermelho ){
      updateProgress('degR', '-')
      changeMenos()
      return
    }
    updateProgress('degR', '+')
    changePlus()
  }

  useLayoutEffect(
    useCallback(()=>{
      async function loadCheck(){
        await firestore().collection('users').doc(user.uid).get().then(snapshot=>{
          if(snapshot.data().degR === 1){
            setCheckVermelho(true)            
          }
          setLoadingInf(false);
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
    {cor:'Vermelho Escuro'},
    {cor:'vermelho'},
    {cor:'rosa Claro'},
    {cor:'Branco'},
  ]

  const { degradeVermelho } = useContext(ExerContext)
  const contain = degradeVermelho

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
       degradeVermelho.map( v =>{
         return(
           <InfAnimed
           key={v.descricao}
           animation='bounceInUp'
           >
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
        name={ checkVermelho ? "check-circle" : "circle" }
        />
      </BtnCheck>
     </View>

   </View>
  );
}


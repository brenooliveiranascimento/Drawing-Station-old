import React, { useState, useContext, useLayoutEffect, useCallback, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableNativeFeedbackBase } from 'react-native';
import { BtnCheck, BtnRed, InfArea, Lapis, LapisArea, LapisText, TextBtn } from './styles';
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Feather'
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../Contexts';
import { ExerContext } from '../../Contexts/Api';
import HeaderBack from '../../Components/HeaderBack';
import { BtnVideo } from '../Petala/styles'
import { useNavigation } from '@react-navigation/native';
export default function Ball() {

  const navigation = useNavigation();
  const { user, updateProgress, updateUser } = useContext(AuthContext)
  const [checkBola, setCheckBola] = useState(false)
  const [loadingInf, setLoadingInf] = useState(true);
  const [showBola, setShowBola] = useState(null)

  const response = firestore().collection('users').doc(user.uid)

  function update(){
   updateProgress('ball')
   setShowBola(null)
  }

  useEffect(()=>{
    async function changeCheckBall(){
      await firestore().collection('users').doc(user.uid).onSnapshot(snapshot=>{
        if(snapshot.data().ball === 1){
          setCheckBola(true)
          setLoadingInf(false)
          return;
        }
        setCheckBola(false)
        setLoadingInf(false)
      })
    }
    changeCheckBall()
  }, [checkBola])

 



  const InfAnimed = Animatable.createAnimatableComponent(InfArea);
  const LapisAnime = Animatable.createAnimatableComponent(LapisArea);

  const cores = [
    {cor:'Preto'},
    {cor:'marrom'},
    {cor:'cinza Escuro'},
    {cor:'Vermelho Escuro'},
    {cor:'vermelho'},
    {cor:'rosa Claro'},
    {cor:'Branco'},
  ]

  const { bola } = useContext(ExerContext)

  if(loadingInf){
    return(<View/>)
  }

return (
   <ScrollView style={{backgroundColor:"#000"}}>
     <HeaderBack/>
     <View style={{ alignItems:'center',
                    justifyContent:'center',
                    marginTop:60
    }}>
        <TextBtn style={{marginBottom:20}}>Introdução profundidade</TextBtn>

      <BtnRed
      onPress={()=>setShowBola( showBola === null ? 'Show' : null )}
      showBola={showBola}
      >
        <TextBtn>Vermelho</TextBtn>
        {
          checkBola ? (
            <Icon name='check-circle' color={"#fff"} size={20}/>
          ) : (
            <Icon name='circle' color={"#fff"} size={20}/>
          )
        }
      </BtnRed>
      <BtnVideo
      onPress={()=>navigation.navigate('WebView')}
      >
        <Icon  style={{marginRight:20}} name='video' size={20} color="#fff"/>
        <TextBtn>Assistir Aula</TextBtn>
      </BtnVideo>
     </View>

     {
       showBola === null ? (
         <View/>
       ) : (
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
       bola.map( v =>{
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
        name={ checkBola ? "check-circle" : "circle" }
        />
      </BtnCheck>
     </View>

         </View>
       )
     }
    
   </ScrollView>
  );
}


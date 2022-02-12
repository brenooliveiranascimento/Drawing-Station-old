import React, { useContext, useState, useLayoutEffect, useCallback, useEffect } from 'react';
import { ExerContext } from '../../Contexts/Api';
import { View, Text, ActivityIndicator } from 'react-native';
import { BtnBlue, BtnGreen, BtnText, Container } from './styles';
import { BtnRed, BtnContain } from './styles'
import HeaderBack from '../../Components/HeaderBack';
import Vermelho from '../../Exercicios/Degrade/Vermelho';
import { AuthContext } from '../../Contexts/index'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons//Feather';
import Verde from '../../Exercicios/Degrade/Verde';

export default function DegradeSelect() {
  const [showDegrade, setShowDegrade] = useState(null);
  const { degradeVermelho } = useContext(ExerContext);
  const { user } = useContext(AuthContext);

  const [redProgress, setRedProgress] = useState(0);
  const [greenProgress, setGreenProgress] = useState(0);
  const [blueProgress, setBlueProgress] = useState(0);
  const [loadingCheck, setLoadingCheck]  = useState(true);

  function mudarGreenMeno(i){
    firestore().collection('users').doc(user.uid).get()
    .then(snapshot=>{
      setGreenProgress(0);
      setShowDegrade(i)
    })
  }

  function mudarGreenMais(i){
    firestore().collection('users').doc(user.uid).get()
    .then(snapshot=>{
      setGreenProgress(1);
      setShowDegrade(i)
    })
  }

  function mudarRedMenos(i){
    firestore().collection('users').doc(user.uid).get()
    .then(snapshot=>{
      setRedProgress(0);
      setShowDegrade(i)
    })
  }

  function mudarRed(i){
    firestore().collection('users').doc(user.uid).get()
    .then(snapshot=>{
      setRedProgress(1);
      setShowDegrade(i)
    })
  }



  useLayoutEffect(
    useCallback(()=>{
      function loadCheck(){
        firestore().collection('users').doc(user.uid).get()
        .then(snapshot=>{
          setLoadingCheck(false);
          setRedProgress(snapshot.data().degR);
          setGreenProgress(snapshot.data().degG);
          setBlueProgress(snapshot.data().degB);
        })
      }
      loadCheck()
    },[])
  )

  function Show(){
    if(showDegrade === 'red'){
      return(
        <Vermelho
        changePlus={()=>mudarRed(null)}
        changeMenos={()=>mudarRedMenos(null)}
        />
      )
      }else if(showDegrade === 'green'){
        return(
        <Verde
        changePlus={()=>mudarGreenMais(null)}
        changeMenos={()=>mudarGreenMeno(null)}
        />
        )
    }else{
      return <View/>
    }
  }
 return (
   <Container>
     <HeaderBack/>
     <View style={{alignItems:'center', justifyContent:'center', borderTopWidth:1, borderTopColor:"#660000"}}>
        <Text style={{color:"#fff", fontSize:20, marginTop:20, fontWeight:'bold'}}>
          Introdução
        </Text>

        <Text style={{color:"#fff", fontSize:20, marginTop:10, fontWeight:'bold'}}>
          Selecione a cor
        </Text>
      </View>
      <BtnContain>
        <BtnRed
        onPress={()=>setShowDegrade( showDegrade === 'red' ? null : 'red')}
        value={showDegrade}
        >
          <BtnText>Vermelho</BtnText>

          {
            loadingCheck ? (
              <ActivityIndicator color={"#fff"} size={20}/>
            ) : (
              <Icon
              name={redProgress === 0 ? "circle" : "check-circle" }
              color={'#fff'}
              size={20}
              />
            )
          }
          
        </BtnRed>

        <BtnGreen
        onPress={()=>setShowDegrade(showDegrade === 'green' ? null : 'green')}
        value={showDegrade}
        >
          <BtnText>Verde</BtnText>
          {
            loadingCheck ? (
              <ActivityIndicator color={"#fff"} size={20}/>
            ) : (
              <Icon
              name={greenProgress === 0 ? "circle" : "check-circle" }
              color={'#fff'}
              size={20}
              />
            )
          }
          
        </BtnGreen>

        <BtnBlue
        onPress={()=>setShowDegrade(showDegrade === 'blue' ? null : 'blue')}
        value={showDegrade}
        >
          <BtnText>Azul</BtnText>
          {
            loadingCheck ? (
              <ActivityIndicator color={"#fff"} size={20}/>
            ) : (
              <Icon
              name={blueProgress === 0 ? "circle" : "check-circle" }
              color={'#fff'}
              size={20}
              />
            )
          }
          
        </BtnBlue>
      </BtnContain>

      <Show/>

   </Container>
  );
}
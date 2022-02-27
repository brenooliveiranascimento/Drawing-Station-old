import React, { useContext, useState, useLayoutEffect, useCallback, useEffect } from 'react';
import { ExerContext } from '../../Contexts/Api';
import { View, Text, ActivityIndicator } from 'react-native';
import { BtnBlue, BtnGreen, BtnText, BtnVideo, Container } from './styles';
import { BtnRed, BtnContain } from './styles'
import HeaderBack from '../../Components/HeaderBack';
import Vermelho from '../../Exercicios/Degrade/Vermelho';
import { AuthContext } from '../../Contexts/index'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons//Feather';
import Verde from '../../Exercicios/Degrade/Verde';
import Azul from '../../Exercicios/Degrade/Azul';
import { useFocusEffect } from '@react-navigation/native';
import { TextBtn } from '../../Exercicios/Petala/styles';
import { useNavigation } from '@react-navigation/native';

export default function DegradeSelect() {
  const navigation = useNavigation()
  const [showDegrade, setShowDegrade] = useState(null);
  const { degradeVermelho } = useContext(ExerContext);
  const { user } = useContext(AuthContext);

  const [redProgress, setRedProgress] = useState(0);
  const [greenProgress, setGreenProgress] = useState(0);
  const [loadingCheck, setLoadingCheck]  = useState(true);

    useEffect(()=>{
      function loadCheck(){
        setLoadingCheck(true)
        firestore().collection('users').doc(user.uid).get()
        .then(snapshot=>{

          setLoadingCheck(false);
          setGreenProgress(snapshot.data().degG);
          setRedProgress(snapshot.data().degR);
        })
      }
      loadCheck()
    },[greenProgress, redProgress])

  

  function Show(){
    if(showDegrade === 'red'){
      return(
        <Vermelho
        />
      )
      }else if(showDegrade === 'green'){
        return(
        <Verde
        />
        )
    }else if(showDegrade === 'blue'){
      return(
        <Azul
        />
      )
    }
    else{
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
            user.degR === 0 ? (
              <Icon name='circle' size={20} color="#fff"/>
            ) : (
              <Icon name='check-circle' size={20} color="#fff"/>
            )
          }
        </BtnRed>

        <BtnGreen
        onPress={()=>setShowDegrade(showDegrade === 'green' ? null : 'green')}
        value={showDegrade}
        >
          <BtnText>Verde</BtnText>
          {
            user.degG === 0 ? (
              <Icon name='circle' size={20} color="#fff"/>
            ) : (
              <Icon name='check-circle' size={20} color="#fff"/>
            )
          }
        </BtnGreen>

        <BtnBlue
        onPress={()=>setShowDegrade(showDegrade === 'blue' ? null : 'blue')}
        value={showDegrade}
        >
          <BtnText>Azul</BtnText>
          {
            user.degB === 0 ? (
              <Icon name='circle' size={20} color="#fff"/>
            ) : (
              <Icon name='check-circle' size={20} color="#fff"/>
            )
          }
        </BtnBlue>
      </BtnContain>
      <View
      style={{
        alignItems:'center'
      }}
      >
        <BtnVideo
        onPress={()=>navigation.navigate('WebView')}
        style={{
          marginTop:40
        }}
          >
          <Icon  style={{marginRight:20}} name='video' size={20} color="#fff"/>
          <TextBtn>Assistir Aula</TextBtn>
        </BtnVideo>
      </View>
      

      <Show/>

   </Container>
  );
}
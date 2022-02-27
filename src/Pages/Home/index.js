import React, { useCallback, useContext, useLayoutEffect, useState } from 'react';
import { View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native';
import Header from '../../Components/Header';
import { AuthContext } from '../../Contexts';
import { Container, ContainScroll, HorizontalScroll, BtnShow, BtnText, BtnArea, InputArea , BtnSelect,InputSearch , BtnSelectBasico, BtnSelectAvancado, BtnSelectIntermediario, ProgressArea, ProgressText } from './styles';
import Basicos from '../../Basicos';
import Intermediarios from '../../Intermediario';
import Avancado from '../../Avancado';
import Icon from 'react-native-vector-icons/Feather'
import Msg from '../../Components/Msg';
import firestore from '@react-native-firebase/firestore'
import { ExerContext } from '../../Contexts/Api';

export default function Home() {

  const { signOut, user, all, basic, changeProgress } = useContext(AuthContext);
  const { handleBD } = useContext(ExerContext)


 

  function Screen(){
   if(estado === 'basicos'){
     return(<Basicos/>)
   }else if(estado === 'intermediario'){
     return(<Intermediarios/>)
   }else if(estado === 'avançado'){
    return(<Avancado/>)
  }else if(estado === null){
    return (
      <View style={{
        alignItems:'center',
        justifyContent:'center',
        flex:1
      }}>
        <Text style={{color:"#fff", fontSize:20, fontWeight:"bold"}}>Selecione uma dificuldade</Text>
      </View>
    )

  }
  }

  const [search, setSeach] = useState('');


  const [dificuldade, setDificuldades] = useState([
    {name:'basicos', id:1, activi:true},
    {name:'intermediario', id:2, activi:false},
    {name:'avançado', id:3, activi:false},
  ])

  const [estado, setEstado] = useState('basicos');
  const [filterIndex, setFilterIndex] = useState(0);

  function select(f){
    setEstado( estado === f ? null : f);
  }

 return (
     <View
     source={require('../../assets/backgrounddegrade1.png')}
     style={{flex:1, backgroundColor:"#000"}}
     >
        <Header/>

    <ProgressArea>
      <Icon style={{marginRight:10}}name='activity' color={"#fff"} size={20}/>
      <ProgressText>seu progresso é {user.all}/10</ProgressText>
      <TouchableOpacity
      onPress={handleBD}
      ><ProgressText>adicionar</ProgressText></TouchableOpacity>
    </ProgressArea>
         <BtnArea>
            <BtnSelectBasico
            onPress={()=>select('basicos')}
            active={estado}
            >
              <BtnText>Básico</BtnText>
            </BtnSelectBasico>

            <BtnSelectIntermediario
            onPress={()=>select('intermediario')}
            active={estado}
            >
              <BtnText>Intermediário</BtnText>
            </BtnSelectIntermediario>

            <BtnSelectAvancado
            onPress={()=>select('avançado')}
            active={estado}
            >
              <BtnText>Avançado</BtnText>
            </BtnSelectAvancado>
         </BtnArea>

          <Screen/>


     </View>
  );
}
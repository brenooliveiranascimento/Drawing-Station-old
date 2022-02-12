import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BtnArea, BtnShow, Container, ImageBtn, TextDesc, TextTitle } from './styles';
import Icon from 'react-native-vector-icons/Feather'
import * as Animetable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Basicos() {

  const navigation = useNavigation();

  const AnimedView = Animetable.createAnimatableComponent(BtnArea);
  const AnimedBtn = Animetable.createAnimatableComponent(BtnShow)


  function handleNavigation(i){
    navigation.navigate(i)
  }


  const [data, setData] = useState([
    {name:'Degrade', descricao:'Exercicio introdutorio', url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2Fdegrade.jpg?alt=media&token=fadab5e1-d5a9-45fb-8d4c-50d7eec214ed'},
    {name:'Bolinha', descricao:'Exercicio de profundidade', url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FcapaBolinha.png?alt=media&token=c7687d41-3ebf-42f2-bd47-230a199ea2ec'},
    {name:'Petalas', descricao:'Praticando um pouco mais', url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FcapaPetalas.jpg?alt=media&token=24064f35-3bdc-41c1-b93c-a22b10bfbcad'},
    {name:'Rosa', descricao:'Praticando um desenho um pouco mais complexo!', url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FcapaRosa.jpg?alt=media&token=bba4de36-afe5-4e6a-bbd7-9785fa1a3cb2'},
    {name:'Maçã', descricao:'introdução em texturas', url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FCaptura%20de%20Tela%20(15).png?alt=media&token=a651f5b8-b2fb-427b-9db5-168864877c96'},
  ])


 return (
   <Container>

    {data.map( i =>(
      <AnimedView
      animation='bounceInRight'
      >
        <AnimedBtn
        onPress={()=>navigation.navigate(i.name)}
        >
          <ImageBtn
          source={{uri:i.url}}
          />
        <View>
          <TextTitle>{i.name}</TextTitle>
          <TextDesc>{i.descricao}</TextDesc>
        </View>
        </AnimedBtn>
      </AnimedView>
    ) )}

   </Container>
  );
}
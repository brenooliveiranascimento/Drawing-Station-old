import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BtnArea, BtnShow, Container, ImageBtn, TextDesc, TextTitle } from './styles';
import Icon from 'react-native-vector-icons/Feather'
import * as Animetable from 'react-native-animatable';

export default function Intermediarios() {

  const AnimedView = Animetable.createAnimatableComponent(BtnArea);
  const AnimedBtn = Animetable.createAnimatableComponent(BtnShow)


  const [data, setData] = useState([
    {name:'Cabelo curto', descricao:'cabelo castanho curto', url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FCapaCavelo.png?alt=media&token=82f72d1f-d81a-45fe-9bda-eb4b9cc1a265'},
    {name:'Rosa Azul', descricao:`Rosa Azul com fundo`, url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FIMG_20220206_141259_821.jpg?alt=media&token=6830b5c9-8a25-44e8-aa5f-d38024599423'},
  ])


 return (
   <Container>

    {data.map( i =>(
      <AnimedView
      animation='bounceInRight'
      >
        <AnimedBtn
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
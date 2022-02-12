import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BtnArea, BtnShow, Container, ImageBtn, TextDesc, TextTitle } from './styles';
import Icon from 'react-native-vector-icons/Feather'
import * as Animetable from 'react-native-animatable';

export default function Avancado() {

  const AnimedView = Animetable.createAnimatableComponent(BtnArea);
  const AnimedBtn = Animetable.createAnimatableComponent(BtnShow)


  const [data, setData] = useState([
    {name:'Terry Crews', descricao:`Em Breve`, url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FIMG_20220206_140140_972.jpg?alt=media&token=23432fec-dbc8-462f-8120-e3770f26b908'},
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
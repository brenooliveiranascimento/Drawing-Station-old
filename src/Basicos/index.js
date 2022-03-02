import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { BtnArea, BtnShow, Container, ImageBtn, TextDesc, TextTitle } from './styles';
import Icon from 'react-native-vector-icons/Feather'
import * as Animetable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Contexts';

export default function Basicos() {
  
  const { updateUrl, user } = useContext(AuthContext);

  const navigation = useNavigation();

  const AnimedView = Animetable.createAnimatableComponent(BtnArea);
  const AnimedBtn = Animetable.createAnimatableComponent(BtnShow)


  function handleNavigation(i, v){
    navigation.navigate(i)
    updateUrl(v)
  }

  


  const [data, setData] = useState([
    {id:user.degB,name:'Degrade', descricao:'Exercicio introdutorio', url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2Fdegrade.jpg?alt=media&token=fadab5e1-d5a9-45fb-8d4c-50d7eec214ed', video:'https://youtu.be/DXqcoe8bSKM'},
    {id:user.ball, name:'Bola', descricao:'Exercicio de profundidade', url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FcapaBolinha.png?alt=media&token=c7687d41-3ebf-42f2-bd47-230a199ea2ec', video:'https://youtu.be/SMXCMsgJo6Y'},
    {id:user.petal,name:'Pétala', descricao:'Praticando um pouco mais', url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FcapaPetalas.jpg?alt=media&token=24064f35-3bdc-41c1-b93c-a22b10bfbcad', video:'https://www.youtube.com/watch?v=yZ7qqDUzMFc&t=409s'},
    {id:user.rose,name:'Rosa', descricao:'Desenho mais complexo', url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FcapaRosa.jpg?alt=media&token=bba4de36-afe5-4e6a-bbd7-9785fa1a3cb2', video:'https://youtu.be/MhDWTg7vdkI'},
    {id:user.apple,name:'Maçã', descricao:'introdução em texturas', url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FCaptura%20de%20Tela%20(15).png?alt=media&token=a651f5b8-b2fb-427b-9db5-168864877c96', video:'https://www.youtube.com/watch?v=yZ7qqDUzMFc&t=409s'},
  ])


 return (
   <Container>

    {data.map( i =>(
      <AnimedView
      animation='bounceInRight'
      >
        <AnimedBtn
        onPress={()=>handleNavigation(i.name, i.video)}
        >
          <ImageBtn
          source={{uri:i.url}}
          />
        <View>
          <TextTitle>{i.name}</TextTitle>
            <TextDesc>{i.descricao}</TextDesc>
            <Icon style={{ marginLeft:21, marginTop:10 }} name={ i.id !== 1 ? "circle" : "check-circle"  } color={"#fff"} size={20}/>
        </View>
        </AnimedBtn>
      </AnimedView>
    ) )}

   </Container>
  );
}
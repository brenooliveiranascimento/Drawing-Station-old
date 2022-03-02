import React, { useCallback, useLayoutEffect, useContext, useState, useEffect } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from '../../Contexts/index'
import { BtnSair, Container, FichArea, ImagePerfil, Input, TextLine, TextLine1 } from './styles';
import * as Animetable from 'react-native-animatable';
import Header from '../../Components/Header'
import Icon from 'react-native-vector-icons/Feather'
import ModalFrase from '../../Components/modalFrase';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';

export default function Profile() {
  const url = {
    video_url:"https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/videoaulas%2FBolinha%20fnal.mp4?alt=media&token=c22805b3-b8b8-484f-9b33-15ac07481a71"
  }
  const FichaAnimed = Animetable.createAnimatableComponent(FichArea)

  

  const { signOut, user } = useContext(AuthContext);

  const [nowUser, setNowUser] = useState('')
  const [progress, setProgress] = useState()
  const [frase, setFrase] = useState('');
  const [ showModal, setShowModal ] = useState(false);
  const [ edit, setEdit ] = useState(false);
  const [editName, setEditName] = useState(false);
  const [name, setName] = useState('');

  function changeName(){
    setName(nowUser)
    setEditName(true);
  }

  useLayoutEffect(
    useCallback(()=>{
      firestore().collection('users').doc(user.uid).onSnapshot((snapshot)=>{
        setNowUser(snapshot.data().name);
        setProgress(snapshot.data().all);
        setFrase(snapshot.data().frase);
      })
    },[])
  )  

  function openEdit(){
    setShowModal(true)
    setEdit(true);
  }

  function editchange(){
    setEdit(false)
  }


 return (
   <ImageBackground style={{ flex: 1, alignItems:'center'}}
   source={require('../../assets/backgrounddegrade1.png')}
   >
     <Header/>
     <View style={{ padding:20, borderTopColor:'#660000', borderTopWidth:1  }} >
      <FichaAnimed animation="fadeIn">
        <View style={styles.InfContain}>

          <TouchableOpacity>
            <ImagePerfil source={require('../../assets/avatar.png')} />
          </TouchableOpacity>
          {
            editName ? (
          <TextLine>
          <Input
          value={name}
          />
            <TouchableOpacity onPress={()=>setEditName(false)}>
              <Icon name='check' color={"#fff"} style={{marginTop:23, marginLeft:-20}} size={20}/>
            </TouchableOpacity>
          </TextLine>
            ) : (
          <TextLine>
            <Text style={styles.TextBranco}>{nowUser}</Text>
            <TouchableOpacity onPress={changeName}>
              <Icon name='edit-2' color={"#fff"} style={{marginTop:23}} size={20}/>
            </TouchableOpacity>
          </TextLine>
            )
          }
          
      
        </View>

        <View style={styles.InfContain}>

            <TextLine1>
              <TouchableOpacity>
                <Icon name='activity' color={"#fff"} style={{marginTop:23}} size={20}/>
              </TouchableOpacity>
              <Text style={styles.TextBranco}>seu progresso atual {progress}/10</Text>
            </TextLine1>
        </View>

        <View style={{alignItems:'center'}}>
          <BtnSair
          onPress={signOut}
          >
            <Text
            style={{color:"#fff", fontSize:18, fontWeight:'bold'}}
            >
              Sair
            </Text>
          </BtnSair>

        </View>



        
        {
            frase === '' ? (
            <TouchableOpacity
            onPress={()=>setShowModal(showModal ? false : true)}
            style={{...styles.FraseContent, alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
              <Text style={{color:"#fff", fontSize:18, fontWeight:"bold"}}>Adicionar uma descrição</Text>
              <Icon name='edit' color={"#fff"} size={20} style={{marginLeft:10}}/>
            </TouchableOpacity>
          ) : (
            <View style={styles.FraseContent}>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                onPress={openEdit}
                >
                  <Icon name='edit' color={"#fff"} size={20} style={{marginRight:10}}/>
                </TouchableOpacity>
                <Text style={{color:"#fff", fontWeight:"bold", fontSize:15}}>Mensagem:</Text>
              </View>

            <Text style={{color:"#fff", marginTop:10, fontSize:17}}>
              {frase}
            </Text>
          </View>
          )
        }

        <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        >
          <ModalFrase
          fechar={()=>setShowModal(false)}
          editar={edit}
          frase1={frase}
          change={editchange}
          />
        </Modal>

        
      </FichaAnimed>
     </View>
   </ImageBackground>
  );
}

export const styles = StyleSheet.create({
  InfContain:{
    flexDirection:'row',
    padding: 20,
  },
  TextBranco:{
    color: '#fff',
    fontSize:19,
    marginTop:20
  },
  FraseContent:{
    padding: 20,
  }
})
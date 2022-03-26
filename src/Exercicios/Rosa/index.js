import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { View, Text, Image } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Feather'
import HeaderBack from '../../Components/HeaderBack'
import { BtnRed, InfArea, TextBtn, LapisArea, Lapis, LapisText, BtnCheck } from './styles'
import { ExerContext } from '../../Contexts/Api'
import { AuthContext } from '../../Contexts/index'
import * as Animatable from 'react-native-animatable'
import firestore from '@react-native-firebase/firestore'
import { BtnVideo } from '../Maca/styles'
import { useNavigation } from '@react-navigation/native'


export default function Rosa(){
    const navigation = useNavigation();

    const { user, updateProgress } = useContext(AuthContext);
    const { Rosa } = useContext(ExerContext);
    const [showRose, setShowRose] = useState(false);
    const [roseCheck, setRoseCheck] = useState(false);

    const InfAnimed = Animatable.createAnimatableComponent(InfArea);
    const LapisAnime = Animatable.createAnimatableComponent(LapisArea);

    function update(){
        updateProgress('Rose')
        if(roseCheck){
            setShowRose(false)
            setRoseCheck(false)
            return
        }
        setRoseCheck(true)
        setShowRose(true)
    }

        useEffect(()=>{
            async function loadData(){
                await firestore().collection('users').doc(user.uid).onSnapshot(snaphot=>{
                    if(snaphot.data().rose === 1){
                        setRoseCheck(true)
                        return;
                    }
                })
            }
            loadData()
        },[])

    const cores = [
        {cor:'preto'},
        {cor:'Cinza escuro'},
        {cor:'Vermelho escuro'},
        {cor:'Vermelho'},
        {cor:'Rosa claro'},
        {cor:'Branco'},
    ]

    return(
        <ScrollView
        style={{
            backgroundColor:"#000"
        }}
        >
        <HeaderBack/>

        <View 
        style={{
            alignItems:'center',
            justifyContent:'center',
            marginTop:60
            }}>
                <BtnRed
                onPress={()=>setShowRose( showRose ? false : true )}
                showRose={showRose}
                >
                    <TextBtn>Rosa</TextBtn>
                    {
                    roseCheck ? (
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
                showRose ? (
                    <>
                    <LapisAnime
                    animation='bounceInRight'
                    >
                        {cores.map( n =>(
                            <Lapis>
                                <LapisText><Icon name="edit-2" size={20}/>{n.cor}</LapisText>
                            </Lapis>
                        ) )}
                    </LapisAnime>
                    {
                        Rosa.map( inf =>(
                            <InfAnimed
                                key={inf.descricao}
                                animation='bounceInUp'
                                >
                                    <Text
                                        style={{color:"#fff", fontSize:25, fontWeight:'bold', marginBottom:10}}>
                                        {inf.cor}
                                     </Text>
                                    <Image
                                    style={{width:250, height:250, borderRadius:10, borderWidth:2, borderColor:'#ddd', marginBottom:20}}
                                    source={{uri:inf.url}}
                                    />

                                    <TextBtn>
                                        {inf.descricao}
                                    </TextBtn>
                                </InfAnimed>
                        ))
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
                                    name={ roseCheck ? "check-circle" : "circle" }
                                    />
                                </BtnCheck>
                         </View>
                    </>
                ) : (
                    <View/>
                )
            }


        </ScrollView>
    )
}
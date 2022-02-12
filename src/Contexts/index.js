import React, { createContext, useState, useEffect } from "react";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export default function AuthProvider({children}){


    useEffect(()=>{
        setLoading(true)
        async function loadData(){
            let nowUser = await AsyncStorage.getItem('now_user')
            if(nowUser){
                setUser(JSON.parse(nowUser))
                setLoadingBtn(false)
            }
            setLoading(false);
        }

        loadData()
    },[])

    async function updateProgress(i, m ){
        await firestore().collection('users').doc(user.uid).get().then(snapshot => {
            if( i === 'degR'){
                if(m === '+'){
                    firestore().collection('users').doc(user.uid).update({
                        degR:snapshot.data().degR +1
                    })
                    return
                }firestore().collection('users').doc(user.uid).update({
                        degR: snapshot.data().degR -1
                })
                return
            }else if( i === 'degG' ){
                if( m === '+' ){
                    firestore().collection('users').doc(user.uid).update({
                        degG:snapshot.data().degG + 1
                    })
                    return;
                }
                firestore().collection('users').doc(user.uid).update({
                    degG:snapshot.data().degG - 1
                })
            }
        })
    }


    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [loadingBtn, setLoadingBtn] = useState(false);

    async function logar(email, password){
        setLoadingBtn(true)
        await auth().signInWithEmailAndPassword(email,password)
        .then((value)=>{
            let uid = value.user.uid;
                firestore().collection('users').doc(uid)
                .get().then((snapshot)=>{
                    let data = {
                        uid,
                        name:snapshot.data().name,
                        email:snapshot.data().email,
                        licenca:snapshot.data().licenca,
                        inter:snapshot.data().inter,
                        all:snapshot.data().all,
                        avan:snapshot.data().avan,
                        Basic:snapshot.data().Basic,
                        degA:snapshot.data().degA,
                        degR:snapshot.data().degR,
                        degB:snapshot.data().degB,
                        ball:snapshot.data().ball,
                        apple:snapshot.data().apple,
                        rose:snapshot.data().rose,
                        blueRose:snapshot.data().blueRose
                    }
                    setUser(data);
                    setNowUser(data);
                    setLoadingBtn(false)
                    setLoadingBtn(false)
                })
        }).catch((error)=>{
            setLoadingBtn(false)
            setLoadingBtn(false)
            alert('ops, ocorreu algum erro!')
        })
    }

    async function registrar(email, password, name){
        setLoadingBtn(true)
        setLoadingBtn(true)
        await auth().createUserWithEmailAndPassword(email, password)
        .then( async (value)=>{
            let uid = value.user.uid;
            let data = {
                email:email,
                name:name,
                uid,
                licenca:null,
                inter:0,
                avan:0,
                Basic:0,
                degA:0,
                degR:0,
                degG:0,
                degB:0,
                ball:0,
                apple:0,
                rose:0,
                blueRose:0,
                all:0
            }
            await firestore().collection('users').doc(uid).set(data).then(()=>{
                setUser(data)
                setNowUser(data)
                setLoadingBtn(false)
            setLoadingBtn(false)
            })
        }).catch((error)=>{
            setLoadingBtn(false)
            setLoadingBtn(false)
            alert('ops, ocorreu algum erro :(')
        })
    }

    async function signOut(){
        await AsyncStorage.clear()
        .then(()=>{
            auth().signOut();
            setUser(null)
        })
    }

    async function setNowUser(data){
        await AsyncStorage.setItem('now_user', JSON.stringify(data))
    }

    return(
    <AuthContext.Provider
    value={{
        verify:user,
        user,
        logar,
        registrar,
        loading,
        loadingBtn,
        signOut,
        updateProgress
    }}
    >
        {children}
    </AuthContext.Provider>
    )
    
}

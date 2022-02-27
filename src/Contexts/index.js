import React, { createContext, useState, useEffect } from "react";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export default function AuthProvider({children}){

    const [all, setAll] = useState(0);
    const [basic, setBasic] = useState(0);
    const [videoUrl, setVideoUrl] = useState('');

    function updateUrl(data){
        setVideoUrl(data);
    }


    async function changeProgress(){
        await firestore().collection('users').doc(user.uid).get()
        .then((snapshot)=>{
            setAll(snapshot.data().all)
            setBasic(snapshot.data().Basic)
        })
    }

    useEffect(()=>{
        setLoading(true)
        async function loadData(){
            let nowUser = await AsyncStorage.getItem('now_user')
            if(nowUser){
                setUser(JSON.parse(nowUser))
                setLoadingBtn(false)
                changeProgress()
            }
            setLoading(false);
        }

        loadData()
    },[])

        async function updateProgress(i){
            const response = firestore().collection('users').doc(user.uid)
           if( i === 'degR' ){
               if( user.degR === 1 ){
                    response.get().then((snapshot)=>{
                        response.update({
                            degR:0,
                            all: snapshot.data().all -1,
                            Basic:snapshot.data().Basic -1
                        }).then(()=>{
                            response.get().then((value)=>{
                                let data = value.data()
                                updateUser(data);

                            })
                        })
                    })
               return;
               }
               response.get().then((snapshot)=>{
                response.update({
                    degR:1,
                    all: snapshot.data().all +1,
                    Basic: snapshot.data().Basic +1
                }).then(()=>{
                    response.get().then((value)=>{
                        let data = value.data()
                        updateUser(data)
                    })
                })
                
            })
           }else if( i === 'degG' ){
               if( user.degG === 1){
                response.get()
                .then((snapshot)=>{
                    response.update({
                        degG:0,
                        all:snapshot.data().all -1,
                        Basic:snapshot.data().Basic -1,
                    }).then(()=>{
                        response.get().then((velue)=>{
                            let data = velue.data()
                            updateUser(data);
                        })
                    })
                })
                return;
               }response.get()
               .then((snapshot)=>{
                   response.update({
                       degG:1,
                       all:snapshot.data().all +1,
                       Basic:snapshot.data().Basic +1,
                   }).then(()=>{
                       response.get().then((velue)=>{
                           let data = velue.data()
                           updateUser(data);
                       })
                   })
               })
           }else if( i === 'degB' ){
            if( user.degB === 1){
             response.get()
             .then((snapshot)=>{
                 response.update({
                     degB:0,
                     all:snapshot.data().all -1,
                     Basic:snapshot.data().Basic -1,
                 }).then(()=>{
                     response.get().then((velue)=>{
                         let data = velue.data()
                         updateUser(data);
                     })
                 })
             })
             return;
            }response.get()
            .then((snapshot)=>{
                response.update({
                    degB:1,
                    all:snapshot.data().all +1,
                    Basic:snapshot.data().Basic +1,
                }).then(()=>{
                    response.get().then((value)=>{
                        let data = value.data()
                        updateUser(data)
                    })
                })
            })
        }else if( i === 'Rose'){
            if( user.rose === 1 ){
                response.get()
                .then((snapshot)=>{
                    response.update({
                        rose:0,
                        all: snapshot.data().all -1,
                        Basic:snapshot.data().Basic -1
                    }).then(()=>{
                        response.get().then((value)=>{
                            let data = value.data()
                            updateUser(data)
                        })
                    })
                })
                return;
            }response.get()
            .then((snapshot)=>{
                response.update({
                    rose:1,
                    all:snapshot.data().all +1,
                    Basic: snapshot.data().Basic +1,
                }).then(()=>{
                    response.get().then((value)=>{
                        let data = value.data()
                        updateUser(data)
                    })
                })
            })
        }else if( i === 'Maca'){
            if( user.apple === 1 ){
                response.get()
                .then((snapshot)=>{
                    response.update({
                        apple:0,
                        all: snapshot.data().all -1,
                        Basic:snapshot.data().Basic -1
                    }).then(()=>{
                        response.get().then((value)=>{
                            let data = value.data()
                            updateUser(data)
                        })
                    })
                })
                return;
            }response.get()
            .then((snapshot)=>{
                response.update({
                    apple:1,
                    all:snapshot.data().all +1,
                    Basic: snapshot.data().Basic +1,
                }).then(()=>{
                    response.get().then((value)=>{
                        let data = value.data()
                        updateUser(data)
                    })
                })
            })
        }else if( i === 'ball' ){
            if( user.ball === 1 ){
                response.get()
                .then((snapshot)=>{
                    response.update({
                        ball:0,
                        all: snapshot.data().all -1,
                        Basic:snapshot.data().Basic -1
                    }).then(()=>{
                        response.get().then((value)=>{
                            let data = value.data()
                            updateUser(data)
                        })
                    })
                })
                return;
            }response.get()
            .then(snapshot=>{
                response.update({
                    ball:1,
                    all: snapshot.data().all +1,
                    Basic:snapshot.data().Basic +1
                }).then(()=>{
                    response.get().then((value)=>{
                        let data = value.data()
                        updateUser(data)
                    })
                })
            })
        }
        else if( i === 'petal' ){
            if( user.petal === 1 ){
                response.get()
                .then((snapshot)=>{
                    response.update({
                        petal:0,
                        all: snapshot.data().all -1,
                        Basic:snapshot.data().Basic -1
                    }).then(()=>{
                        response.get().then((value)=>{
                            let data = value.data()
                            updateUser(data)
                        })
                    })
                })
                return;
            }response.get()
            .then(snapshot=>{
                response.update({
                    petal:1,
                    all: snapshot.data().all +1,
                    Basic:snapshot.data().Basic +1
                }).then(()=>{
                    response.get().then((value)=>{
                        let data = value.data()
                        updateUser(data)
                    })
                })
            })
        }
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
                        blueRose:snapshot.data().blueRose,
                        petal:snapshot.data().petal
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
                all:0,
                petal:0
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

    function updateUser(data){
        setNowUser(data)
        setUser(data)
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
        updateProgress,
        all,
        basic,
        changeProgress,
        updateUser,
        updateUrl,
        videoUrl
    }}
    >
        {children}
    </AuthContext.Provider>
    )
    
}

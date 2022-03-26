import React, { useState, useContext, useLayoutEffect, useCallback }  from 'react'
import { StatusBar, View } from 'react-native'
import { Container, AreaContetnt, BtnVoltar, HeadArea, HeadText, ContentAre, Input, Adicionar } from './styles'
import Icon from 'react-native-vector-icons/Feather'
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from '../../Contexts'

export default function ModalFrase({fechar, editar, frase1, change}){

	const { user } = useContext(AuthContext);
	const [frase, setFrase] = useState('');

	async function callFrase(){
		await firestore().collection('users').doc(user.uid).get().then(snapshot => {
			setFrase(snapshot.data().frase)
		})
	}
	

	async function handleFrase(){
		if(user){
			await firestore().collection('users').doc(user.uid).update({
				frase:frase
			}).then(()=>{
				setFrase('');
				fechar();
				change()
			}).catch((error)=>{
				alert('ops, ocorreu algum erro!, tente novamente' + error)
			})
		}
	}

    return(
        <Container>
					<StatusBar hidden={true}/>
					<AreaContetnt>
					<HeadArea>
						<BtnVoltar
						onPress={()=>fechar()}
						>
							<Icon name='arrow-left' color={"#fff"} size={25}/>		
						</BtnVoltar>
						
						<HeadText>Voltar</HeadText>

					</HeadArea>

					<ContentAre>
						<Input
						onChangeText={(t)=>setFrase(t)}
						value={frase}
						maxLength={200}
						multiline={true}
						placeholder="Digite sua descrição"
						/>

						{
							editar ? (
								<Adicionar
								onPress={callFrase}
								>
									<HeadText>Modificar existente</HeadText>					
								</Adicionar>
							) : (
								<View/>
							)
						}

						

						<Adicionar
						onPress={handleFrase}
						>
							<HeadText>Adicionar</HeadText>					
						</Adicionar>
					</ContentAre>
											
					</AreaContetnt>
        </Container>
    )
}
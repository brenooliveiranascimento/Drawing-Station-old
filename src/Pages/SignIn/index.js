import React, { useState, useContext } from 'react';
import { View, Text, TextInput, ImageBackground, Image, ActivityIndicator } from 'react-native';
import { Container, Logo, Lapis, Input, BtnLog, BtnReg, TinyInput, Black, Safe, TextBtn, VisitButton, BtnSignIN, BtnText, BtnChange, Breno, BrenoBtn } from './styles';
import * as Animetable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../Contexts';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation()
  const [estado, setEstado] = useState(true);
  const [showAnimed, setShowAnimed] = useState(true);
  const LogInput = Animetable.createAnimatableComponent(Input)
  const AnimedView = Animetable.createAnimatableComponent(View)
  const LogoAnimado = Animetable.createAnimatableComponent(Logo)
  const BtnLogAnimado = Animetable.createAnimatableComponent(BtnSignIN);
  const BtnChangeAnimed = Animetable.createAnimatableComponent(BtnChange);

  const [email, setEmail] = useState('');
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassWord] = useState('')

  function handleEstado(i){
    setShowAnimed(true);
    setEstado(i)
    setName('');
    setPassword('');
    setConfirmPassWord('');
    setEmail('');
  }

  const { logar, registrar, loadingBtn, visitUser } = useContext(AuthContext);

  function handleLogIn(){
    if(email === '' || password === ''){
      alert('preencha todos os campos!!')
      return
    }
    logar(email,password);
  }

  function handleReg(){
    if(email === '' || password === '' || confirmPassword === '' || name === ''){
      alert('Preencha todos os campos!!')
      return;
    }

    if(password !== confirmPassword){
      alert('As senha não condizem!!')
      return;
    }

    registrar(email, password, name)
  }



 

  if(estado){
    return(
  <ImageBackground
  style={{flex:1}}
  source={require('../../assets/backgrounddegrade1.png')}
  >
   
    <Container>

      

      {
        showAnimed ? (
          <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
            <LogoAnimado
            animation='flipInY'
            source={require('../../assets/LogoCruasemFundo.png')}
            />
          <AnimedView style={{flexDirection:'row', alignItems:'center'}} animation="bounceInLeft">
            <Icon
            name='mail'
            size={25}
            color={'#fff'}
            />
            <LogInput
            onAnimationEnd={()=>setShowAnimed(false)}
            animation='bounceInLeft'
            placeholder="Email"
            />
          </AnimedView>

          <AnimedView style={{flexDirection:'row', alignItems:'center'}} animation="bounceInRight">
            <Icon
            name='lock'
            size={25}
            color={'#fff'}
            />
            <LogInput
            onAnimationEnd={()=>setShowAnimed(false)}
            animation='bounceInRight'
            placeholder="Senha"
            />
          </AnimedView>

          <View style={{flexDirection:'row'}}>
            <BtnLogAnimado
              animation='bounceInLeft'
              >
              <BtnText>Entrar</BtnText>
            </BtnLogAnimado>
          </View>

          <View style={{flexDirection:'row'}}>
            <BtnChangeAnimed
              animation='bounceInRight'
              >
              <BtnText>Registrar</BtnText>
            </BtnChangeAnimed>
          </View>


          
          
          </View>
         
        ) : (
          <View style={{alignItems:'center'}}>
            <Logo
            source={require('../../assets/LogoCruasemFundo.png')}
            />
            <View style={{flexDirection:'row', alignItems:'center'}} >
            <Icon
            name='mail'
            size={25}
            color={'#fff'}
            />
            <Input
            onChangeText={(t)=>setEmail(t)}
            value={email}
            placeholder="Email"
            />
            
            </View>

            <View style={{flexDirection:'row', alignItems:'center'}} >
            <Icon
            name='lock'
            size={25}
            color={'#fff'}
            />
            <Input
            onChangeText={(t)=>setPassword(t)}
            value={password}
            placeholder="Senha"
            secureTextEntry={true}
            />
            
            </View>
            <View style={{flexDirection:'row'}}>
            <BtnSignIN
            onPress={handleLogIn}
            >
               {loadingBtn ? (
                  <ActivityIndicator size={20} color="#fff"/>
                ) : (
                  <BtnText>Entrar</BtnText>
                )}
            </BtnSignIN>
            </View>

            <View style={{flexDirection:'row'}}>
            <BtnChange
            onPress={()=>handleEstado(false)}
            >
              <BtnText>Registrar</BtnText>
            </BtnChange>
            </View>
            
 
            
          </View>
          
        )
      }
      <BrenoBtn
      onPress={()=>navigation.navigate("Breno")}
      ><Breno>Desenvolvido com carinho por <Text style={{fontWeight:"bold"}}>@Breno Nascimento</Text></Breno></BrenoBtn>

    </Container>
  </ImageBackground>

    )
  }
 return (
  <ImageBackground
  style={{flex:1}}
  source={require('../../assets/backgrounddegrade1.png')}
  >
    <Container>

      

      {
        showAnimed ? (
          <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
            <LogoAnimado
            style={{
              width:200,
              height:100
            }}
            animation='flipInY'
            source={require('../../assets/LogoCruasemFundo.png')}
            />
          <AnimedView style={{flexDirection:'row', alignItems:'center',}} animation="bounceInLeft">
            <Icon
            name='user'
            size={25}
            color={'#fff'}
            />
            <LogInput
            onAnimationEnd={()=>setShowAnimed(false)}
            animation='bounceInLeft'
            placeholder="Name"
            />
          </AnimedView>

          <AnimedView style={{flexDirection:'row', alignItems:'center'}} animation="bounceInRight">
            <Icon
            name='mail'
            size={25}
            color={'#fff'}
            />
            <LogInput
            onAnimationEnd={()=>setShowAnimed(false)}
            animation='bounceInRight'
            placeholder="Email"
            />
          </AnimedView>

          <AnimedView style={{flexDirection:'row', alignItems:'center'}} animation="bounceInLeft">
            <Icon
            name='lock'
            size={25}
            color={'#fff'}
            />
            <LogInput
            onAnimationEnd={()=>setShowAnimed(false)}
            placeholder="Senha"
            secureTextEntry={true}
            />
          </AnimedView>
          
          <AnimedView style={{flexDirection:'row', alignItems:'center'}} animation="bounceInRight">
            <Icon
            name='lock'
            size={25}
            color={'#fff'}
            />
            <LogInput
            onAnimationEnd={()=>setShowAnimed(false)}
            animation='bounceInRight'
            placeholder="Confirmar senha"
            secureTextEntry={true}
            />
          </AnimedView>

          <View style={{flexDirection:'row'}}>
            <BtnLogAnimado
              animation='bounceInLeft'
              >
              <BtnText>Cadastrar</BtnText>
            </BtnLogAnimado>
          </View>

          <View style={{flexDirection:'row'}}>
            <BtnChangeAnimed
              animation='bounceInRight'
              >
              <BtnText>Já possuo conta</BtnText>
            </BtnChangeAnimed>
          </View>

          
             
          
          </View>
         
        ) : (
          <View style={{alignItems:'center'}}>
            <Logo
            style={{
              width:200,
              height:100
            }}
            source={require('../../assets/LogoCruasemFundo.png')}
            />
            <View style={{flexDirection:'row', alignItems:'center'}} >
            <Icon
            name='user'
            size={25}
            color={'#fff'}
            />
            <Input
            onChangeText={(t)=>setName(t)}
            value={name}
            placeholder="Name"
            />
            
            </View>

            <View style={{flexDirection:'row', alignItems:'center'}} >
            <Icon
            name='mail'
            size={25}
            color={'#fff'}
            />
            <Input
            onChangeText={(t)=>setEmail(t)}
            value={email}
            placeholder="Email"
            />
            </View>

            <View style={{flexDirection:'row', alignItems:'center'}} >
            <Icon
            name='lock'
            size={25}
            color={'#fff'}
            />
            <Input
            onChangeText={(t)=>setPassword(t)}
            value={password}
            placeholder="Senha"
            secureTextEntry={true}
            />
            </View>

            <View style={{flexDirection:'row', alignItems:'center'}} >
            <Icon
            name='lock'
            size={25}
            color={'#fff'}
            />
            <Input
            onChangeText={(t)=>setConfirmPassWord(t)}
            value={confirmPassword}
            placeholder="Confirmar senha"
            secureTextEntry={true}
            />
            </View>
            <View style={{flexDirection:'row'}}>
            <BtnSignIN
            onPress={handleReg}
            >
                {loadingBtn ? (
                  <ActivityIndicator size={20} color="#fff"/>
                ) : (
                  <BtnText>Cadastrar</BtnText>
                )}
            </BtnSignIN>
            </View>

            <View style={{flexDirection:'row'}}>
            <BtnChange
            onPress={()=>handleEstado(true)}
            >
              <BtnText>Já possuo conta</BtnText>
            </BtnChange>
            </View>

            
            
          </View>
          
        )
      }
      <BrenoBtn
      onPress={()=>navigation.navigate("Breno")}
      ><Breno>Desenvolvido com carinho por <Text style={{fontWeight:"bold"}}>@Breno Nascimento</Text></Breno></BrenoBtn>
    </Container>
  </ImageBackground>

  );
}
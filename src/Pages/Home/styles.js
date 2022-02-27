import styled from 'styled-components/native';

export const Container = styled.ScrollView`

`;

export const BtnText = styled.Text`
font-size:15px;
font-weight:bold;
color:#fff;
`;

export const ContainScroll = styled.ScrollView`
flex:1;
width: 100%;
height: 300px;
background-color:rgba(0,0,0,0.2);
border-bottom-width:2px;
border-bottom-color:#fff;
border-top-color:#fff;
border-top-width:1px;
`;



export const HorizontalScroll = styled.ScrollView`
width:100%;
height:300px;
margin-top:30px;
border-bottom:2px;
border-bottom:#fff;
`;

export const BtnShow = styled.TouchableOpacity`
width: 70%;
height: 50px;
border-width:2px;
border-color:#fff;
align-items:center;
justify-content:center;
padding:5px;
border-radius:7px;
background-color:rgba(0,0,0,0.2);
margin-left:15%;
margin-top:50px;
`;

export const BtnArea = styled.View`
flex-direction:row;
width: 100%;
align-items:center;
justify-content:center;
background-color:#000;
border-bottom-width:2px;
border-bottom-color:#663333;
`;

export const BtnSelectBasico = styled.TouchableOpacity`
width: 100px;
height: 40px;;
color:#fff;
align-items:center;
justify-content:center;
border-radius:7px;
margin: 10px;
background-color:${ props => props.active === 'basicos' ? "#660000" : "#000"} ;
`;

export const BtnSelectIntermediario = styled.TouchableOpacity`
width: 100px;
height: 40px;;
color:#fff;
align-items:center;
justify-content:center;
border-radius:7px;
margin: 10px;
background-color:${ props => props.active === 'intermediario' ? "#660000" : "#000"} ;
`;

export const BtnSelectAvancado = styled.TouchableOpacity`
width: 100px;
height: 40px;;
color:#fff;
align-items:center;
justify-content:center;
border-radius:7px;
margin: 10px;
background-color:${ props => props.active === 'avançado' ? "#660000" : "#000"} ;
`;

export const BtnSelectCabelo = styled.TouchableOpacity`
width: 100px;
height: 40px;;
color:#fff;
align-items:center;
justify-content:center;
border-radius:7px;
margin: 10px;
background-color:${ props => props.active === 'Cabelo' ? "#660000" : "#000"} ;
`;

export const BtnSelectRostos = styled.TouchableOpacity`
width: 100px;
height: 40px;;
color:#fff;
align-items:center;
justify-content:center;
border-radius:7px;
margin: 10px;
background-color:${ props => props.active === 'Rosto' ? "#660000" : "#000"} ;
`;

export const InputSearch = styled.TextInput.attrs({
    placeholderTextColor:"#ddd"
})`
background-color:#222222;
padding:10px;
color:#ddd;
width: 70%;
height: 45px;
`;


export const InputArea = styled.View`
flex-direction:row;
height: 70px;
width: 100%;
align-items:center;
justify-content:center;
background-color:#000;
border-top-width:1px;
border-top-color:#663333;
`;

export const ProgressArea = styled.View`
width: 100%;
height: auto;
padding: 20px;
align-items: center;
justify-content: center;
flex-direction: row;
`;

export const ProgressText = styled.Text`
color:#fff;
font-size:18px;
font-weight: bold;
`;
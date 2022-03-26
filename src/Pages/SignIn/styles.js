import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
align-items:center;
justify-content: center;
`;

export const Logo = styled.Image`
width: 300;
height: 100px;
`;



export const Input = styled.TextInput.attrs({
    placeholderTextColor:'rgba(170,170,170,170)'
})`
width: 80%;
height:50px;
align-items: center;
padding: 10px;
color: #fff;
font-size: 20px;
margin-bottom:15px;
border-bottom-width:1px;
border-bottom-color:#fff;
border-bottom-left-radius: 10px;
margin-top: 10;
`;

export const BtnSignIN = styled.TouchableOpacity`
width: 60%;
height: 35px;
border-radius:7px;
align-items: center;
justify-content: center;
border-width:1px;
border-color:#fff;
margin-top:20px
`;

export const BtnText = styled.Text`
color: #fff;
font-size: 20;
font-weight: bold;
`;

export const  BtnChange = styled.TouchableOpacity`
width: 60%;
height: 40px;
border-radius:7px;
align-items: center;
justify-content: center;
margin-top:10px
`;

export const Breno = styled.Text`
color:#ddd;
font-size: 15px;

`;

export const BrenoBtn = styled.TouchableOpacity`
position:absolute;
bottom: 15px;
text-align: center;
`;
import styled from "styled-components/native";

export const Container = styled.ScrollView`
flex:1;
`;

export const BtnArea = styled.View`
width: 100%;
height: 180px;
background-color:rgba(102, 0, 0,0.2);
padding:10px;
margin-top:20px;
flex:1;
`;

export const BtnShow = styled.TouchableOpacity`
flex-direction:row;
width: 100%;
height: 100%;
align-items:center;
padding: 20px;
flex:1;
`;

export const ImageBtn = styled.Image`
width: 150px;
height: 150px;
border-radius:20px;
border-width:2px;
border-color:#fff
`;

export const TextTitle = styled.Text`
font-size:30px;
font-weight:bold;
color: #fff;
margin-left:20px;
margin-bottom:30px
`;

export const TextDesc = styled.Text`
color:#ddd;
font-size:15;
margin-left:20px
`;
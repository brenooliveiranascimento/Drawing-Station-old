import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex:1;
    background-color: #000;
`;

export const BtnContain = styled.View`
    flex-direction: row;
    flex:1;
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: center;
    margin-top:10px;
`;

export const BtnRed = styled.TouchableOpacity`
    width: 110px;
    height: 60px;;
    color:#fff;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    border-width: 2px;
    border-color: #660000;
    margin: 10px;
    background-color:${props => props.value === 'red' ? '#660000' : '#222222'} ;
`;

export const BtnGreen = styled.TouchableOpacity`
    width: 110px;
    height: 60px;;
    color:#fff;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    border-width: 2px;
    border-color: #2d7121;
    margin: 10px;
    background-color:${ props => props.value === 'green' ? '#2d7121' : '#222222'} ;
`;

export const BtnBlue = styled.TouchableOpacity`
    width: 110px;
    height: 60px;;
    color:#fff;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    border-width: 2px;
    border-color: #005780;
    margin: 10px;
    background-color:${ props => props.value === 'blue' ? '#005780' : '#000'} ;
`;

export const BtnText = styled.Text`
    color:#fff;
    font-size:17px;
    font-weight:bold;
`;
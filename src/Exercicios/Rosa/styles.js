import styled from "styled-components"

export const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content: center;
`;

export const LapisArea = styled.View`
    flex:1;
    align-items:center;
    margin-bottom:20;
`;

export const Lapis = styled.View`
    width: 80%;
    height: 50px;
    border-bottom-width: 1px;
    border-bottom-color: #ddd;
    margin-top:10px;
    margin-bottom:-10;
`;

export const LapisText = styled.Text`
    font-size: 18;
    color: #fff;
    top:20;
`;

export const BtnAula = styled.TouchableOpacity`

`;

export const InfArea = styled.View`
    width: 100%;
    height: auto;
    align-items:center ;
    justify-content: center;
    flex-direction: column;
    padding: 14px;
    background-color: rgba(102, 0, 0,0.2);
    margin-top: 30px;
`;

export const TextBtn = styled.Text`
    font-size:18;
    color:#ddd;
    text-align: center;
    font-weight: bold;
`;

export const BtnCheck = styled.TouchableOpacity`
    width: 50%;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-width:2px;
    border-color:#660000;
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
    background-color:${ props=> props.showRose ? '#660000' : '#222222' };
`;
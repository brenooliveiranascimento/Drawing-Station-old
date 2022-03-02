import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	background-color: rgba(0,0,0,0.8);
	align-items: center;
	justify-content: center;
`;

export const AreaContetnt = styled.SafeAreaView`
	width: 300px;
	height: 500px;
	background-color: #330000;
	border-radius: 6px;
`
export const BtnVoltar = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	margin-left: 10px;
	border-width: 2px;
	border-color: #fff;
	align-items: center;
	justify-content: center;
`;

export const HeadArea = styled.View`
	height: 60px;
	width: 100%;
	border-bottom-width: 1px;
	border-bottom-color: #fff;
	flex-direction: row;
	align-items: center;
`;

export const HeadText = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: #fff;
	margin-left: 20px;
`;

export const ContentAre = styled.View`
	flex:1;
	align-items:center;
	padding: 20px;
`;

export const Input = styled.TextInput.attrs({
	placeholderTextColor:"#ddd"
})`
	width: 100% ;
	height: 90px;	
	padding: 10px;
	border-radius: 6px;
	border-color: #fff;
	color:#fff;
	margin-top: 20px;
	background-color: #220000;
`;

export const Adicionar = styled.TouchableOpacity`
	width: 90%;
	height: 50px;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	border-color: #fff;
	border-width: 1px;
	margin-top: 30px;
`;
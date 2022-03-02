import styled from 'styled-components/native'

export const Container = styled.View`
	flex:1;
	background-color: #000;
	align-items: center;
	justify-content: center;
`;

export const FichArea = styled.View`
	width:350px;
	height: auto;
	background-color:rgba(102, 0, 0,0.2);
	border-width: 1px;
	border-radius: 7px;
	border-color: #fff;
`;

export const ImagePerfil = styled.Image`
	width: 50px;
	height: 50px;
	border-radius: 25px;
`;

export const TextLine = styled.View`
	border-bottom-width: 1px;
	border-bottom-color: #fff;
	flex: 1;
	justify-content: space-between;
	margin-left: 15px;
	flex-direction:row;
`;

export const TextLine1 = styled.View`
	border-bottom-width: 1px;
	border-bottom-color: #fff;
	flex: 1;
	margin-left: 15px;
	flex-direction:row;
	margin-top:-40;
`;

export const BtnSair = styled.TouchableOpacity`
	width: 30%;
	height: 50px;
	border-radius: 6px;
	border-color: #fff;
	border-width: 1px;
	align-items: center;
	justify-content: center;
`;

export const Input = styled.TextInput`
	width: 100%;
	height: 40px;
	color: #fff;
	border-width: 0px;
	font-size: 18px;
	margin-top:9px
`; 
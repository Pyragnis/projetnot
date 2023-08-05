import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

const Button = styled.TouchableOpacity`
  margin-top: 16px;
  padding: 8px;
  background-color: #f1c40f;
  border-radius: 9999px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: #ffe;
  text-align: center;
  margin-top:50%;
`;

const PokemonButton = ({ onPress, title,key }) => (
  <Button onPress={onPress} key={key}>
    <ButtonText>{title}</ButtonText>
  </Button>
);

export default PokemonButton;

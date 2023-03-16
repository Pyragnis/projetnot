import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: #f44336;
`;

const Logo = styled.Image`
  width: 100px;
  height: 50px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const Button = styled.TouchableOpacity`
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: #f44336;
  font-size: 16px;
  font-weight: bold;
`;

const HeaderPokemon = ({ title, onPress }) => {
  return (
    <Container>
      <Logo source={require('./assets/pokemon-logo.png')} />
      <Title>{title}</Title>
      <Button onPress={onPress}>
        <ButtonText>More</ButtonText>
      </Button>
    </Container>
  );
};

export default HeaderPokemon;

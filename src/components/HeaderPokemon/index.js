import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: #f44336;
`;

const LogoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left:15%;
`;

const Logo = styled.Image`
  width: 150px;
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

const HeaderPokemon = ({ title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('PokemonOst');
  };

  return (
    <Container>
      <LogoContainer>
        <Logo source={require('../../../public/PokemonLogo.png')} />
      </LogoContainer>
      <Title>{title}</Title>
      <Button onPress={handlePress}>
        <ButtonText>OST</ButtonText>
      </Button>
    </Container>
  );
};

export default HeaderPokemon;

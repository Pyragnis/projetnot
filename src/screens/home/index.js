import React from 'react';
import styled from 'styled-components/native';
import Video from 'react-native-video';
import { Text, View,ScrollView,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <BackgroundVideo source={require('../../../public/video/background.mp4')} resizeMode="cover" repeat={true} />
      <StyledButton onPress={() => navigation.navigate('Pokedex')}>
      <ButtonText>Go to the Pokedex</ButtonText>
    </StyledButton>
    </Container>
  ); 
};

const StyledButton = styled.TouchableOpacity`
  background-color: #ffcb05;
  border-radius: 20px;
  padding: 10px 20px;
  margin-top: 20px;
  align-items: center;
  position: absolute;
  bottom: 0;
  margin-left:20%;
  margin-bottom:10%;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  margin-top:10px;
`;

const Container = styled.View`
  flex: 1;
`;

const BackgroundVideo = styled(Video)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export default HomePage;

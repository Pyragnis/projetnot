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
      <Button
          title="go to the project pokedex"
          onPress={() => navigation.navigate('Pokedex')}
        />
    </Container>
  );
};

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

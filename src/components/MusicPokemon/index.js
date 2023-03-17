import React, { useState } from 'react';
import styled from 'styled-components/native';
import Sound from 'react-native-sound';
import { Alert } from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const MusicList = styled.FlatList`
  width: 100%;
`;

const MusicItem = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-color: #ddd;
`;

const MusicName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const PlayButton = styled.TouchableOpacity`
  margin-top: 8px;
  padding: 8px 16px;
  background-color: #f44336;
  border-radius: 8px;
`;

const StopButton = styled.TouchableOpacity`
  margin-top: 8px;
  padding: 8px 16px;
  background-color: #ccc;
  border-radius: 8px;
`;

const PlayButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const StopButtonText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

const MusicPokemon = () => {
  const [musicList, setMusicList] = useState([
    { name: 'Pokemon Rouge/bleu', file: require('../../../public/audio/rouge.mp3') },
    { name: 'Pokemon Diamant/perle', file: require('../../../public/audio/diamant.mp3') },
    { name: 'Pokemon Argent/or', file: require('../../../public/audio/argent.mp3') },
    { name: 'Pokemon noir/blanc', file: require('../../../public/audio/noir.mp3') },
    { name: 'Pokemon ruby/saphir alpha', file: require('../../../public/audio/ruby.mp3') },
  ]);

  const [sound, setSound] = useState(null);

  const handlePlayButtonPress = (file, name) => {
    if (sound) {
      sound.stop();
      setSound(null);
    }

    const newSound = new Sound(file, error => {
      if (error) {
        console.log('Error loading sound: ', error);
      } else {
        newSound.play();
        setSound(newSound);
        Alert.alert(`Musique de ${name}`, 'La musique est lancée');
      }
    });
  };

  const handleStopButtonPress = () => {
    if (sound) {
      sound.stop();
      setSound(null);
    }
  };

  const renderMusicItem = ({ item }) => {
    return (
      <MusicItem>
        <MusicName>{item.name}</MusicName>
        <PlayButton onPress={() => handlePlayButtonPress(item.file, item.name)}>
          <PlayButtonText>Play</PlayButtonText>
        </PlayButton>
        {sound && (
          <StopButton onPress={handleStopButtonPress}>
            <StopButtonText>Stop</StopButtonText>
          </StopButton>
        )}
      </MusicItem>
    );
  };

  return (
    <Container>
      <MusicList
        data={musicList}
        keyExtractor={item => item.name}
        renderItem={renderMusicItem}
      />
    </Container>
  );
};

export default MusicPokemon;

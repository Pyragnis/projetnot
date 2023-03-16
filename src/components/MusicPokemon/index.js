import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import axios from 'axios';
import Sound from 'react-native-sound';

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

const PlayButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const MusicPokemon = () => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/version-group/1')
      .then(response => {
        const versionIds = response.data.versions.map(version => version.url.split('/')[6]);
        const musicRequests = versionIds.map(versionId => axios.get(`https://pokeapi.co/api/v2/version/${versionId}`));
        Promise.all(musicRequests)
          .then(responses => {
            const musicList = responses.map(response => ({
              name: response.data.names.find(name => name.language.name === 'en').name,
              url: response.data.names.find(name => name.language.name === 'en').name.toLowerCase().replace(/\s+/g, '-') + '.mp3',
            }));
            setMusicList(musicList);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handlePlayButtonPress = url => {
    const sound = new Sound(url, '', error => {
      if (error) {
        console.log('Error loading sound: ', error);
      } else {
        sound.play();
      }
    });
  };

  const renderMusicItem = ({ item }) => {
    return (
      <MusicItem>
        <MusicName>{item.name}</MusicName>
        <PlayButton onPress={() => handlePlayButtonPress(item.url)}>
          <PlayButtonText>Play</PlayButtonText>
        </PlayButton>
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

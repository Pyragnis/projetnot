import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const ListItem = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

const ImageContainer = styled.View`
  padding-right: 10px;
`;

const PokemonImage = styled.Image`
  width: 80px;
  height: 80px;
`;

const InfoContainer = styled.View`
  flex: 1;
`;

const NameText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const TypeText = styled.Text`
  color: #555;
`;

const PokemonApi = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <ListItem>
      <ImageContainer>
        <PokemonImage source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${item.url.split('/')[6]}.png` }} />
      </ImageContainer>
      <InfoContainer>
        <NameText>{item.name}</NameText>
        <TypeText>{'Type: unknown'}</TypeText>
      </InfoContainer>
    </ListItem>
  );

  return (
    <Container>
      <FlatList
        data={pokemonList}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </Container>
  );
};

export default PokemonApi;

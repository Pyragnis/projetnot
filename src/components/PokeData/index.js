import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Text, View, Image } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
const Container = styled.View`
  flex: 1;
  background-color: #f2f2f2;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.View`
  flex: 1;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

const TextValue = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;



const PokemonDetails = () => {
  const route = useRoute()
  const [pokemon, setPokemon] = useState(null);
  const  id  = route.params.id;
  useEffect(() => {
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        const data = response.data;
        const id = data.id;
        const name = data.name;
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        const shinyImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;
        const types = data.types.map(type => type.type.name).join(', ');
        const abilities = data.abilities.map(ability => ability.ability.name).join(', ');
        const stats = data.stats.map(stat => ({
          name: stat.stat.name,
          value: stat.base_stat
        }));
        setPokemon({ id, name, image, shinyImage, types, abilities, stats });
      })
      .catch(error => console.log(error));
  }, []);

  if (!pokemon) {
    return null;
  }

  return (
    <Container>
      <ContentContainer>
        <Title>{pokemon.name}</Title>
        <Image source={{ uri: pokemon.image }} style={{ width: 150, height: 150 }} />
        <Image source={{ uri: pokemon.shinyImage }} style={{ width: 150, height: 150 }} />
        <Label>Types:</Label>
        <TextValue>{pokemon.types}</TextValue>
        <Label>Abilities:</Label>
        <TextValue>{pokemon.abilities}</TextValue>
        <Label>Stats:</Label>
        {pokemon.stats.map(stat => (
          <View key={stat.name}>
            <Text>{stat.name}: {stat.value}</Text>
          </View>
        ))}
      </ContentContainer>
    </Container>
  );
};

export default PokemonDetails;

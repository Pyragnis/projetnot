import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { TextInput } from 'react-native';

const PokemonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const PokemonList = styled.FlatList`
  width: 100%;
`;

const PokemonItem = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-color: #ddd;
`;

const PokemonName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const PokemonImagesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

const PokemonImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const SearchInput = styled.TextInput`
  margin-top: 16px;
  padding: 8px;
  width: 80%;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then(response => {
        setPokemonList([...pokemonList, ...response.data.results]);
        setFilteredPokemonList([...filteredPokemonList, ...response.data.results]);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [offset]);

  const handleSearchTermChange = term => {
    setSearchTerm(term);
    const filteredPokemon = pokemonList.filter(pokemon => pokemon.name.includes(term.toLowerCase()));
    setFilteredPokemonList(filteredPokemon);
  }

  const renderPokemonItem = ({ item }) => {
    const pokemonId = item.url.split('/')[6];
    return (
      <PokemonItem>
        <PokemonName>{item.name}</PokemonName>
        <PokemonImagesContainer>
          <PokemonImage source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png` }} />
          <PokemonImage source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonId}.png` }} />
        </PokemonImagesContainer>
      </PokemonItem>
    );
  };

  const handleLoadMore = () => {
    setOffset(offset + limit);
  }

  return (
    <PokemonContainer>
      <SearchInput
        placeholder="Search Pokemon"
        value={searchTerm}
        onChangeText={handleSearchTermChange}
      />
      <PokemonList
        data={filteredPokemonList}
        keyExtractor={item => item.name}
        renderItem={renderPokemonItem}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </PokemonContainer>
  );
};

export default Pokemon;

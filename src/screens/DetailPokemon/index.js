import React from 'react'
import { Text, View,ScrollView } from 'react-native';
import HeaderPokemon from '../../components/HeaderPokemon';
import PokemonDetails from '../../components/PokeData';


function Pokedex() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderPokemon/>
      <PokemonDetails/>
    </View>
  )
}

export default Pokedex
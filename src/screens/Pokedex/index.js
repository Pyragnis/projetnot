import React from 'react'
import { Text, View,ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';  
import HeaderPokemon from '../../components/HeaderPokemon';
import PokemonApi from '../../components/PokemonApi';


function Pokedex() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderPokemon/>
      <PokemonApi/>
    </View>
  )
}

export default Pokedex
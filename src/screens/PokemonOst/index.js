import React from 'react'
import { Text, View,ScrollView } from 'react-native';
import HeaderPokemon from '../../components/HeaderPokemon';
import MusicPokemon from '../../components/MusicPokemon';


function Pokedex() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderPokemon/>
      <MusicPokemon/>
    </View>
  )
}

export default Pokedex
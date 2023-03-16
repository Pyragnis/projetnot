
import React from 'react';
import Home from './src/screens/home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View,ScrollView,Button } from 'react-native';
import Pokedex from './src/screens/Pokedex';
import PokemonOst from './src/screens/PokemonOst';



export default function App() {
  const Stack = createNativeStackNavigator();

  function HomeScreen({ navigation }) {
    return (
      <View>
        <Home/>
        <Button
          title="go to the project pokedex"
          onPress={() => navigation.navigate('Pokedex')}
        />
      </View>
    );
  }
  
  
  function PokedexPage() {
    return (
        <Pokedex/>
    );
  }
  function PokeMusic() {
    return (
        <PokemonOst/>
    );
  }

  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Pokedex" component={PokedexPage} />
      <Stack.Screen name="PokemonOst" component={PokeMusic} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

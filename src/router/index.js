
import React from 'react';
import Home from '../screens/home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View,ScrollView,Button } from 'react-native';
import Pokedex from '../screens/Pokedex';



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
  
  
  function Pokedex() {
    return (
      <Pokedex/>
    );
  }

  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Pokedex" component={Pokedex} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


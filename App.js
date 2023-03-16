
import React from 'react';
import Harry from './src/screens/Harry'
import Home from './src/screens/home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View,ScrollView,Button } from 'react-native';
import COMarvel from './src/screens/COMarvel';
import MarvelCAra from './src/screens/MarvelCara';
import MarvelDetail from './src/screens/MarvelDetail'
import Pokedex from './src/screens/Pokedex';



export default function App() {
  const Stack = createNativeStackNavigator();

  function HomeScreen({ navigation }) {
    return (
      <View>
        <Home/>
        <Button
          title="go to harry list"
          onPress={() => navigation.navigate('Harry')}
        />
        <Button
          title="go to Marvel login"
          onPress={() => navigation.navigate('Marvel')}
        />
        <Button
          title="go to the project pokedex"
          onPress={() => navigation.navigate('Pokedex')}
        />
      </View>
    );
  }
  
  function HarryList() {
    return (
      <ScrollView>
        <Harry/>
      </ScrollView>
    );
  }

  function Marvel() {
    return (
      <ScrollView>
        <COMarvel/>
      </ScrollView>
    );
  }
  function MarvelCara() {
    return (
      <ScrollView>
        <MarvelCAra/>
      </ScrollView>
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
      <Stack.Screen name="Harry" component={HarryList} />
      <Stack.Screen name="Marvel" component={Marvel} />
      <Stack.Screen name="MarvelCara" component={MarvelCara} />
      <Stack.Screen name="MarvelDetail" component={MarvelDetail} />
      <Stack.Screen name="Pokedex" component={Pokedex} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


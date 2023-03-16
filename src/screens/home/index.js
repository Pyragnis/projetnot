import React from 'react'
import { Text, View,ScrollView,Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../../components/Header';  



function index() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header title="Marvel"/>
      <Button
        title="Go to trombinoscope"
        onPress={() => navigation.navigate('Harry')}
      />
      <Button
          title="go to harry list"
          onPress={() => navigation.navigate('Harry')}
      />
      <Button
          title="go to Marvel login"
          onPress={() => navigation.navigate('Marvel')}
      />
    </ScrollView>
  )
}

export default index
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Login from './components/Login';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import Login from './components/Login';

export default function AppContainer() {
  return (
    <AppearanceProvider>
      <App />
    </AppearanceProvider>
  );
}

function App() {
  const colorScheme = useColorScheme();

  const themeStatusBarStyle = colorScheme === 'light' ? 'dark-content' : 'light-content';
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Login style={[themeTextStyle, themeContainerStyle]} />

      <StatusBar barStyle={themeStatusBarStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lightContainer: {
    backgroundColor: '#fff'
  },
  darkContainer: {
    backgroundColor: '#1c1e21'
  },
  lightThemeText: {
    color: '#707070'
  },
  darkThemeText: {
    color: '#545454'
  },
});

// export default App;

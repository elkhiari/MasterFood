import * as React from 'react';
import {Video , Image, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: 'https://i.ibb.co/WcSnL37/Natural-Fresh-Food-Logo.png' }}
      />
      <Text style={styles.paragraph}>Coming soon</Text>
      <Text style={styles.name}>Hassnaa Ennahda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'rgb(109, 168, 51)',
    padding: 8,
  },
  paragraph: {
    textAlign:'center',
    bottom:30,
    position:'absolute',
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
  },
  name:{
    bottom:10,
    position:'absolute',
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

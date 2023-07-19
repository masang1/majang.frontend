import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SplashPng } from './assets';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Image source={SplashPng} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

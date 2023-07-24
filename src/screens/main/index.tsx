import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Header } from 'src/components';

export const MainScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>expo는 구조 맘대로 바꾸면 터져요</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

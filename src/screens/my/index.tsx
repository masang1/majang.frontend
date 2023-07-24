import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MyScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Chat screen</Text>
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

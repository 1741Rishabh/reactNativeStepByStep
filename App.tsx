
import React from 'react';

import { StyleSheet, Text, useColorScheme, View } from 'react-native';
const App = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={colorScheme == 'light' ? styles.textdark : styles.textwhite}> {colorScheme}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textdark: {
    color: 'black'
  },
  textwhite: {
    color: 'white'
  },

});

export default App;

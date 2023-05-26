
import React from 'react';

import { StyleSheet, Text, useColorScheme, View ,SafeAreaView,ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
const App = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;

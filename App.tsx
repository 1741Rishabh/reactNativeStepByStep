
import React from 'react';

import { StyleSheet, Text, useColorScheme, View ,SafeAreaView,ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
const App = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCard/>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;

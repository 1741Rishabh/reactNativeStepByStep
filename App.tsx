
import React from 'react';

import { StyleSheet, Text, useColorScheme, View ,SafeAreaView,ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCards from './components/FancyCards';
const App = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCard/>
        <FancyCards/>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;

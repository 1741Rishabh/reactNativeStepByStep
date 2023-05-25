/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FlatCards from './rishabhcomponents/FlatCards';




function App(): JSX.Element {
 
  return (
    <SafeAreaView >
      <View>
        <Text style={styles.centerText}>Rishabh Kumar </Text>
      </View>
      <View>
        <FlatCards/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centerText:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold',
    color:'#793079'
  }
})


export default App;


# Learn React Native Step by Step 
React Native is an open-source framework for building mobile applications using JavaScript and React, a popular JavaScript library for building user interfaces. It allows developers to write code once and create native mobile apps for multiple platforms, such as iOS and Android, without the need to develop separate apps for each platform. React Native uses native components and APIs, which makes the apps perform and look like traditional native apps. It offers a fast development cycle, efficient code reuse, and a rich ecosystem of third-party libraries, making it a popular choice for mobile app development.

## Lessons 3

#### Dynamic Theming in React Native: A Guide to Hooks

xThe `useColorScheme` hook returns a string representing the current color scheme of the device. It can have one of three possible values:

- "light": The user prefers a light color theme.
- "dark": The user prefers a dark color theme.
- null: The user has not indicated a preferred color theme

It's important to note that the `useColorScheme` hook relies on the device's operating system to provide the color scheme information. Therefore, its availability and accuracy depend on the device and OS version. Make sure to test your app on different devices and operating systems to ensure consistent behavior.
### code
````
import React from 'react';
import {StyleSheet,Text,useColorScheme,View} from 'react-native';
````
````
const App = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={colorScheme == 'light' ? styles.textdark : styles.textwhite}> {colorScheme}</Text>
    </View>
  );
};
````
````
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
````
````
export default App;

````



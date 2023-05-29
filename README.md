
# Learn React Native Step by Step 
React Native is an open-source framework for building mobile applications using JavaScript and React, a popular JavaScript library for building user interfaces. It allows developers to write code once and create native mobile apps for multiple platforms, such as iOS and Android, without the need to develop separate apps for each platform. React Native uses native components and APIs, which makes the apps perform and look like traditional native apps. It offers a fast development cycle, efficient code reuse, and a rich ecosystem of third-party libraries, making it a popular choice for mobile app development.

# START Command
- npx react-native run-ios

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

<img src="./projectImages/Project1.png" width=200  />

# Project 2 start 


## Lessons 4 (Design FlatCard)
- In this project first i create a components folder 
- inside that i create a FlatCard file with .tsx
- when i import FlatCard in App file and use it as a component 
- when i simpely design the FlagCard components
- flatCard file code  👇
````
import React from "react";
import {View,Text,SafeAreaView, StyleSheet} from "react-native";
````
````
function FlatCards()
{
    return (
    <SafeAreaView>
        <View>
            <Text style={styles.textstyle}>FlatCards </Text>
            <View style={styles.container}>
                <View style={[styles.card,styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card,styles.cardTwo]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card,styles.cardThree]}>
                    <Text>Red</Text>
                </View>
            </View>
        </View>

    </SafeAreaView>)
}
````
````
const styles = StyleSheet.create({
    container:{ 
        flex:1,
        flexDirection:'row'
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:4,
    
        width:100,
        height:100,
        borderRadius:4,
        backgroundColor:"red "
        
    },
    cardOne:{
        
        backgroundColor:"red"
    },
    cardTwo:{
        backgroundColor:"green"
    },
    cardThree:{
        backgroundColor:"blue"
    },
    textstyle:{
        marginLeft:3,
        fontWeight:'bold',
        color:'black',
        fontSize:20

    }
})
````

````
export default FlatCards
````

<img src="./projectImages/Project2part1.png" width=200  />

## Lessons 5 (Design ElevatedCard)
###  ScrollView vs FlatList
`<ScrollView> vs <FlatList>` - which one to use?

ScrollView renders all its react child components at once, but this has a performance downside.

- In React Native, the ScrollView component is used to create a scrollable container that allows users to scroll through a list or content that exceeds the available screen space. It provides a way to handle scrolling of large amounts of data or content that cannot fit within a single screen.
- ```` import { ScrollView } from 'react-native'; ````
#### ScrollView properties:  horizontal,
- contentContainerStyle: Allows you to style the container of the content inside the ScrollView.
- horizontal: Set this prop to true if you want horizontal scrolling instead of vertical scrolling.
- scrollEnabled: Set this prop to false to disable scrolling.
- onScroll: A callback function that gets called when the scroll position changes.
- keyboardShouldPersistTaps: Determines whether the keyboard should stay open when tapping inside the ScrollView.
Other common properties like style, contentInset, contentOffset, etc., can be applied to customize the ScrollView.

<img src="./projectImages/Project2part2.png" width=200  />










# Style in react-native 
To get box shadow for both platforms, use both sets of style props:
````
boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
}
````






## Credits

Special thanks to [Hitesh Choudhary Sir](https://www.youtube.com/@HiteshChoudharydotcom) for their excellent tutorials and guidance throughout the development of this project. Their instructional videos, particularly [React Native Mastery with 10 apps ](https://www.youtube.com/watch?v=kGtEax1WQFg&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&pp=iAQB), provided invaluable knowledge and expertise that greatly influenced the implementation of this project. We highly recommend checking out their YouTube channel for more educational content.


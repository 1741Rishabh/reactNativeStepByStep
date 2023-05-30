import React from "react"
import { View,Text,StyleSheet,Image } from "react-native"

const FancyCard = ()=>{
    return (
    <View>
        <Text style={styles.trending}>Trending Cards</Text>
        <View style={[styles.card,styles.cardElevated]}>

        <Image source={{uri: 'https://source.unsplash.com/random/?boy'}}
       style={styles.card} />
        </View>
    </View>)
}

const styles = StyleSheet.create({
    trending:{
        fontSize:50
    },
    card:{
        width:200,
        height:200,

    },
    cardElevated:{

    },
    cardImage:{

    }
})


export default FancyCard;


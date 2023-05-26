import React from "react";
import {View,Text,SafeAreaView, StyleSheet} from "react-native";
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
export default FlatCards
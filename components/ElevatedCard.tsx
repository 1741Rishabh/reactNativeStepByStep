import React from 'react'
import {Text,View,StyleSheet,ScrollView} from 'react-native'

function ElevatedCard()
{
    return (
        <View>
            <Text style={styles.textstyle}>ElevatedCard</Text>
            <ScrollView horizontal={true} style={styles.containers}>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>
                        Tap
                    </Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>
                        to 
                    </Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>
                        scroll
                    </Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>
                        the 
                    </Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>
                        container
                    </Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>
                        end
                    </Text>
                </View>
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    textstyle:{
        marginLeft:3,
        fontWeight:'bold',
        color:'black',
        fontSize:20
    },
    card:{
        width:100,
        height:100,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        margin:8

    },
    cardElevated:{
        backgroundColor:'#CAD5E2'

    },
    containers:{ 
        padding:8
    }
})

export default ElevatedCard;
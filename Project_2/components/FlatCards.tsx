import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.conatiner}> 
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10
    },
    conatiner:{
        flex:1,
        flexDirection:'row',
        padding:5
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:20,
        height:100,
        borderRadius:5,
        margin:5
    },
    cardOne:{
        backgroundColor:'#EF5354'
    },
    cardTwo:{
        backgroundColor:'#50DBB4'
    },
    cardThree:{
        backgroundColor:'#5DA3FA'
    }
})
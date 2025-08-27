import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={{
            uri:'https://reactnative.dev/img/tiny_logo.png'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>React Native</Text>
            <Text style={styles.cardLabel}>Built by FaceBook</Text>
            <Text style={styles.cardDescription}>React Native is a framework built by facebook to build cross platform mobile apps</Text>
            <Text style={styles.cardFooter}>Love React Native</Text>
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
    card:{
        backgroundColor:'#c6c1c1ff',
        height:400,
        padding:10,
        alignItems:'center',
        margin:10,
        borderRadius:10
    },
    cardElevated:{
        elevation:1,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:200,
        width:200,
        marginBottom:5,
        // alignSelf:'center'
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:5
    },
    cardTitle:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5
    },
    cardLabel:{
        fontSize:18,
        marginBottom:3
    },
    cardDescription:{
        fontSize:18,
        marginBottom:5
    },
    cardFooter:{
        fontSize:17
    }
})
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
    return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Java Script in 2025
            </Text>
        </View>
        <Image 
        source={{
            uri:'https://reactnative.dev/img/logo-share.png'
        }}
        style={styles.cardImage} />
        <View style={styles.bodyContainer}>
            <Text style={styles.bodyText} numberOfLines={3}>
                React Native is an open-source framework created by Meta (Facebook) that lets you build mobile apps for both Android and iOS using JavaScript and React. Instead of writing separate code for each platform, you write once and React Native uses native components under the hood, giving you the performance of real native apps.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity 
            onPress={() => openWebsite('https://www.python.org/')}>
                <Text style={styles.socialLinks}>Read more...</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => openWebsite('https://www.python.org/')}>
                <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
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
        backgroundColor:'#868181ff',
        height:400,
        marginHorizontal:10,
        borderRadius:10,
        // padding:10
    },
    elevatedCard:{
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
    headerText:{
        fontSize:17,
        fontWeight:'bold'
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    cardImage:{
        height:200,
        width:'100%'
    },
    bodyContainer:{
        padding:10,
    },
    bodyText:{
        fontSize:18
    },
    footerContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        backgroundColor:'#3e3b3bff',
        padding:10,
        fontSize:15,
        color:'#ffffff',
        borderRadius:4
    }
})
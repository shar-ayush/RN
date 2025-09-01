import { StyleSheet, Text,Image, View, ScrollView } from 'react-native'
import React from 'react'


export default function ContactList() {
    const contacts = [
  {
    uid: 1,
    name: "React Native Basics",
    imageurl: "https://reactnative.dev/img/tiny_logo.png",
    description: "Learn how to build native mobile apps using JavaScript and React."
  },
  {
    uid: 2,
    name: "JavaScript Guide",
    imageurl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    description: "A complete guide to JavaScript, from fundamentals to advanced concepts."
  },
  {
    uid: 3,
    name: "Python Programming",
    imageurl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    description: "The official Python programming language for all your development needs."
  },
  {
    uid: 4,
    name: "Free Stock Photos",
    imageurl: "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Download beautiful, high-quality free stock photos from Pexels."
  }
];


  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView 
      style={styles.container}
      scrollEnabled={false}>
        {contacts.map(({uid, name, imageurl, description}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri:imageurl
                }}
                style={styles.userImage} />
                <View style={styles.userBody}>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userDes}>{description}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10
    },
    container:{
        paddingHorizontal:10,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#9391a4ff',
        marginBottom:5,
        padding:8,borderRadius:10
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:25,
        marginRight:15
    },
    userName:{},
    userDes:{},
    userBody:{
       
        
    }
})
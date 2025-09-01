import { StyleSheet, Text, View, ImageSourcePropType, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react';

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps) => {
  return(
    <View>
      <Image 
      style={styles.diceImage}
      source={imageUrl}
      />
    </View>
  )
}

export default function App() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    switch(randomNumber){
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable
      onPress={rollDice}

      >
        <Text style={styles.rollDiceBtnTxt}>Roll the dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  diceImage:{
    width:100,
    height:100
  },
  rollDiceBtnTxt:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:20
  }
})
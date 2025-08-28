import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginPage from './components/LoginPage'
import Login from './components/Login'
export default function App() {
  return (
    <View style={{flex:1}}>
      <Login />
    </View>
  )
}

const styles = StyleSheet.create({})
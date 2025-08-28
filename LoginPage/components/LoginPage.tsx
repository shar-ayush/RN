import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React,{useState} from 'react'


export default function LoginPage() {
  
  const [form, setForm] = useState({
      email:'',
      password:''
  })

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#e8ecf4'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image 
          style={styles.headerImage} 
          source={{uri:"https://withfra.me/android-chrome-512x512.png"}}
          alt='logo'
          />

          <Text style={styles.title}>Sign in to my App</Text>
          <Text style={styles.subtitle}>Get access to your profile</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email Address</Text>

            <TextInput 
            style={styles.inputControl}
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            placeholder='john@example.com'
            placeholderTextColor="#6b7280"
            value={form.email}
            onChangeText={email => setForm({...form, email})}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput 
            secureTextEntry
            style={styles.inputControl}
            placeholder='***********'
            placeholderTextColor="#6b7280"
            value={form.password}
            onChangeText={password => setForm({...form, password})}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
            onPress={() => {
              // handle onPress

              Alert.alert('Successfully logged in!')
            }}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={{marginTop:'auto'}}
            onPress={() => {
              // handle onPress
            }}>
            <Text style={styles.formFooter}>
              Don't have an account?{' '}
              <Text style={{textDecorationLine:'underline'}}>Sign up</Text>
            </Text>

          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      padding:24,
      flex:1
    },
    header:{
      marginVertical:36
    },
    headerImage:{
      height:80,
      width:80,
      alignSelf:'center',
      marginBottom:30
    },
    title:{
      fontSize:30,
      fontWeight:'700',
      textAlign:'center',
      marginBottom:6
    },
    subtitle:{
      color:'#929292',
      fontSize:18,
      fontWeight:'500',
      textAlign:'center'
    },
    form:{
      marginBottom:24,
      flex:1
    },
    input:{
      marginBottom:16
    },
    inputLabel:{
      fontSize:20,
      fontWeight:'600',
      color:'#222',
      marginBottom:8
    },
    inputControl:{
      backgroundColor:"#fff",
      height:44,
      paddingHorizontal:16,
      borderRadius:12,
      fontSize:15,
      fontWeight:'500',
      color:'#222'
    },
    formAction:{
      marginVertical:24
    },
    button:{
      backgroundColor:"#075eec",
      borderRadius:8,
      borderWidth:1,
      borderColor:"#075eec",
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      paddingVertical:10,
      paddingHorizontal:20
    },
    buttonText:{
      fontSize:18,
      fontWeight:'600',
      color:"#fff"
    },
    formFooter:{
      fontSize:17,
      fontWeight:'600',
      color:"#222",
      textAlign:'center',
      letterSpacing:0.15
    }
})
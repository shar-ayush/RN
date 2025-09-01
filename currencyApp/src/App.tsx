import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// constants
import { currencyByRupee } from './constants';
// components
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';
import { Currency } from './index.d';

export default function App() {
  
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  
  const buttonPressed = (targetValue: Currency) => {
    if(!inputValue){
      return Snackbar.show({
        text:'Enter a value to convert',
        backgroundColor:'#EA7773',
        textColor:'#000000',
        duration: Snackbar.LENGTH_LONG,
      })
    }
    const inputAmount = parseFloat(inputValue)
    if(!isNaN(inputAmount)){
      const convertedAmount = inputAmount * targetValue.value
      const result = convertedAmount.toFixed(2)
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    }
    else{
      return Snackbar.show({
        text:'Enter a valid value',
        backgroundColor:'#F4BE2C',
        textColor:'#000000',
        duration: Snackbar.LENGTH_LONG
      })
    }
  }


  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
            maxLength={14}
            value={inputValue}
            clearButtonMode='always' // only for ios
            keyboardType='number-pad'
            placeholder='Enter amount in Rupees'
            onChangeText={setInputValue}
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>{resultValue}</Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList 
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={(item: Currency) => item.name}
            renderItem={({item}: {item: Currency}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected
                ]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
    marginTop: 20,
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  inputAmountField: {
    height: 50,
    width: '80%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
  bottomContainer: {
    flex: 3,
    width: '100%',
    marginTop: 20,
  },
  button: {
    flex: 1,
    margin: 8,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#ffeaa7',
    borderWidth: 2,
    borderColor: '#fdcb6e',
  },
});


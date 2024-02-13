import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function Searchbar() {

    const [text, onChangeText] = React.useState('ENTER SCAN ID');

  return (
    <View style={styles.container}>
<TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center'
    },
    input: {
      height: 60,
      width: 350,
      margin: 20,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#F1F3F4',
      color: '#111315',
      fontSize: 16
    },
  });
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ConnectionStatus from './ConnectionStatus'


export default function Header() {
  return (
    <>
    
    <ConnectionStatus/>
    <View style={styles.container}>
            <Text style={styles.header}>USonic</Text>
     
    </View>
    </>
  )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 10,
        marginBottom: 20,
    }, 
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        letterSpacing: 10,
        color: '#F1F3F4'
    }
})
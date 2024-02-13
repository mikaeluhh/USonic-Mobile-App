import { View, StyleSheet } from 'react-native'
import React from 'react'


export default function Values() {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.card}></View>
      <View style={styles.card}></View>
      </View>
      </>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      },
      card: {
        height: 135,
        width: 165, //180
        backgroundColor: '#585E67',
        borderRadius: 20,
        margin: 10,
      }
});
import { View, StyleSheet } from 'react-native'
import React from 'react'

export default function Graph() {
  return (
    <View style={styles.container}>
      <View style={styles.card}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center'
  },
    card: {
        height: 315,
        width: 350, //380
        margin: 10,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: '#585E67',
        borderRadius: 20,
    }


});
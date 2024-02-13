import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ConnectionStatus() {
  return (
    <View style={styles.container}>
        <View style={styles.wrap}>
            <Text style={styles.status}>Online</Text>
            <MaterialCommunityIcons name="circle" size={14} color="#00DF87" />   
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 0.2,
    //     backgroundColor: 'yellow'
    // },
    wrap: {
        alignContent: 'center',
        alignItems: 'center',
        marginRight: 25,
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
    },
    status: {
        fontSize: 14,
        letterSpacing: 3,
        color: '#F1F3F4'
    }

});
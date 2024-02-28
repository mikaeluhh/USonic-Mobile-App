import { View, StyleSheet, Text } from "react-native";
import React from "react";

export default function Values() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.value}>1MHz</Text>
          <Text style={styles.valueTitle}>FREQUENCY </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.value}>220V</Text>
          <Text style={styles.valueTitle}>VOLTAGE</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  card: {
    height: 135,
    width: 165, //180
    backgroundColor: "#585E67",
    borderRadius: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: 'center'
  },
  value: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#F1F3F4",
    // color: '#111315'
  },
  valueTitle: {
    fontWeight: "normal",
    fontSize: 14,
    color: "#F1F3F4",
  }
});

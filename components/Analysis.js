import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Analysis() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.qualitywrap}>
            <Text style={styles.qualityTitle}>Quality:</Text>
            <Text style={styles.qualitySubtitle}>Good</Text>
          </View>
          <View style={styles.mark}>
            <AntDesign name="checkcircle" size={40} color="#00DF87" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  card: {
    height: 110,
    width: 350, //380
    margin: 10,
    backgroundColor: "#585E67",
    borderRadius: 20,
    justifyContent: 'center', 
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    alignItems: 'center', 
  },
  qualitywrap: {
    flexDirection: "column", 
    alignItems: "flex-start", 
  },
  qualityTitle: {
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 3,
    color: "#F1F3F4",
    marginBottom: 5, 
  },
  qualitySubtitle: {
    fontSize: 18,
    color: "#F1F3F4",
    fontWeight: "bold",
  },
  mark: {
    alignItems: 'flex-end', 
  },
});

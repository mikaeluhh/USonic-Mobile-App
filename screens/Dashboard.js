import { View, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header.js";
import Graph from "../components/Graph.js";
import Values from "../components/Values.js";
import Analysis from "../components/Analysis.js";
import Buttons from "../components/Buttons.js";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Header/>
      <Graph/>
      <Values/>
      <Analysis/>
      <Buttons/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111315",
  },
  featureWrap: {
    alignItems: "center",
  },
  viewWrap: {},
});

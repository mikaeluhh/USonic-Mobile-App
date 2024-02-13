import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Buttons({ firstbtn }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: "#585E67" }]}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.btnWrap}>
          <Text style={[styles.btnTitle, { color: "#F1F3F4" }]}>Close</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor: "#F1F3F4" }]}>
        <View style={styles.btnWrap}>
          <Text style={[styles.btnTitle, { color: "#111315" }]}>Restart</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor: "#FF7400" }]}>
        <View style={styles.btnWrap}>
          <Text style={[styles.btnTitle, { color: "#111315" }]}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    height: 50,
    width: 112,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnWrap: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 2,
  },
});

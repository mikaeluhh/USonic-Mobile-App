import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function GoBack() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons
          name="arrow-back-circle-outline"
          size={40}
          color="#F1F3F4"
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    marginLeft: 25,
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
  },
});

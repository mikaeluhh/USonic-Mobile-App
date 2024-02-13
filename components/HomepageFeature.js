import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function HomepageFeature({
  title,
  subtitle,
  featureIcon,
  feature,
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(feature)}
    >
      <LinearGradient
        colors={["#707581", "#585E67", "#323337"]}
        style={styles.gradient}
      >
        <View style={styles.titleWrap}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <View style={styles.icon}>{featureIcon}</View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: "30%",
    width: "80%",
    margin: 10,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  titleWrap: {
    position: "absolute",
    top: 25,
    left: 18,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 3,
    color: "#F1F3F4",
  },
  subtitle: {
    fontSize: 14,
    color: "#F1F3F4",
  },
  icon: {
    top: -5,
    left: 190,
  },
});

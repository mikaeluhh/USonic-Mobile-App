import { View, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header.js";
import HomepageFeature from "../components/HomepageFeature.js";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Dashboard from "./Dashboard.js";
import Results from "./Results.js";
import Account from "./Account.js";


export default function Homepage() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.featureWrap}>
        <HomepageFeature
          title={"DASHBOARD"}
          subtitle={"Graphs and Values"}
          featureIcon={
            <SimpleLineIcons name="graph" size={100} color="#F27835" />
          }
          feature={Dashboard}
        />
        <HomepageFeature
          title={"RESULTS"}
          subtitle={"Scan Results"}
          featureIcon={<Foundation name="results" size={100} color="#F27835" />}
          feature={Results}
        />
        <HomepageFeature
          title={"ACCOUNT"}
          subtitle={"Profile and Settings"}
          featureIcon={
            <MaterialCommunityIcons
              name="account-hard-hat"
              size={100}
              color="#F27835"
            />
          }
          feature={Account}
        />
      </View>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111315",
  },
  featureWrap: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
});
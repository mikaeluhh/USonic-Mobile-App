import { View, StyleSheet } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";

export default function Graph() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <LineChart
          data={{
            labels: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={350}
          height={315}
          // yAxisLabel="$"
          // yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            // backgroundColor: "transparent",
            backgroundGradientFrom: "#2E3134",
            backgroundGradientTo: "#3C4043",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(245, 245, 245, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(245, 245, 245, ${opacity})`,
            // style: {
            //   marginBottom: 50
            // },
            propsForDots: {
              r: "0",
              strokeWidth: "1",
              stroke: "#111315",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 20,
            paddingTop: 30,
            marginBottom: 20,
            marginTop: -20,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  card: {
    height: 315,
    width: 350,
    margin: 10,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "transparent",
    borderRadius: 20,
    justifyContent: "center",
  },
});

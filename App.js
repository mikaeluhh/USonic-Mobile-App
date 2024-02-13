import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./screens/Dashboard";
import IndividualResult from "./screens/IndividualResult";
import Results from "./screens/Results";
import SplashScreen from "./screens/SplashScreen";
import Homepage from "./screens/Homepage";
import Account from "./screens/Account";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Homepage"
        >
          
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Results" component={Results} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="IndividualResult" component={IndividualResult}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111315", //'#242529
  },
});

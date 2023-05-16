import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import Login from "./src/components/Login";
// import Lista from "./src/components/Lista";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <Login />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "gray",
  },
});

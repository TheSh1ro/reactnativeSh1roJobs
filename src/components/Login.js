import { ImageBackground, StyleSheet, Text, View } from "react-native";
const imageBackground = require("../../assets/caitlyn.jpg");

export default function Login() {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageBackground} style={styles.imageBackground}>
        <Text style={{ color: "white" }}>Oi</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  imageBackground: {
    display: "flex",
    flex: 1,
  },
});

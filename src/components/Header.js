import { Text, View, StyleSheet, Image } from "react-native";
const logo = require("../../assets/user.png");

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={{ color: "white", fontSize: 20 }}>Sh1roJobs</Text>
      <Image source={logo} style={styles.logoImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "black",
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  logoImage: {
    width: 30,
    height: 30,
    position: "absolute",
    right: 15,
  },
});

import { Text, View, StyleSheet, Image } from "react-native";
const logo = require("../../assets/user.png");

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>ClimbingElo</Text>
      <Text style={styles.headerText}>Home</Text>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    cursor: "pointer",
  },
  logoImage: {
    width: 30,
    height: 30,
    cursor: "pointer",
  },
});

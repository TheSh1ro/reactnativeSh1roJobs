import { StyleSheet, Text, View, FlatList } from "react-native";
export default function Lista() {
  const tasks = ["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4", "Tarefa 5"];
  return (
    <View style={styles.container}>
      <View>
        <FlatList data={tasks} renderItem={({ item }) => <Text>{item}</Text>} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    padding: 5,
  },
});

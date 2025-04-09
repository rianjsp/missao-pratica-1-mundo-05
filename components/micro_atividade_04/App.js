import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

// Importações
import FlatListBasics from "./components/micro_atividade_04/FlatListBasics";
import SectionListBasics from "./components/micro_atividade_04/SectionListBasics";

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>FlatList e SectionList Exemplo</Text>

      <Text style={styles.subTitle}>FlatList</Text>
      <FlatListBasics />

      <Text style={styles.subTitle}>SectionList</Text>
      <SectionListBasics />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;

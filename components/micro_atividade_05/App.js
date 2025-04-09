import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import DisplayAnImage from "./components/micro_atividade_05/DisplayAnImage"; // Caminho do arquivo com o primeiro componente
import DisplayAnImageWithStyle from "./components/micro_atividade_05/DisplayAnImageWithStyle"; // Caminho do arquivo com o segundo componente

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DisplayAnImage />

      <DisplayAnImageWithStyle />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;

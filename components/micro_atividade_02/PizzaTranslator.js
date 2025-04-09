import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const onChangeTextprop = (newText) => {
    setText(newText);
    setTranslatedText(
      newText
        .split(" ")
        .map((word) => (word ? "🍕" : ""))
        .join(" ")
    );
  };

  const onSubmitEditingprop = () => {
    console.log("Texto enviado:", text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tradutor para Pizza 🍕</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        value={text}
        onChangeText={onChangeTextprop}
        onSubmitEditing={onSubmitEditingprop}
        returnKeyType="done"
      />

      <Text style={styles.label}>Você digitou:</Text>
      <Text style={styles.normalText}>{text}</Text>

      <Text style={styles.label}>Tradução:</Text>
      <Text style={styles.translated}>{translatedText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 20,
  },
  label: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  normalText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  translated: {
    fontSize: 36,
    color: "#f57c00",
  },
});

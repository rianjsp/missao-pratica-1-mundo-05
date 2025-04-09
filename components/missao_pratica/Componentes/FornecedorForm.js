import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const FornecedorForm = ({ onAddFornecedor }) => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contato, setContato] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem, setImagem] = useState("");

  const categories = [
    { label: "Alimentos", value: "Alimentos" },
    { label: "Tecnologia", value: "Tecnologia" },
    { label: "Comercio", value: "Comercio" },
    { label: "Perfumaria", value: "Perfumaria" },
    { label: "Roupas", value: "Roupas" },
  ];

  const handleSubmit = () => {
    const fornecedor = { nome, endereco, contato, categoria, imagem };
    onAddFornecedor(fornecedor);
    setNome("");
    setEndereco("");
    setContato("");
    setCategoria("");
    setImagem("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Contato"
        value={contato}
        onChangeText={setContato}
      />

      {/* Picker para a categoria */}
      <Text style={styles.label}>Categoria</Text>
      <Picker
        selectedValue={categoria}
        onValueChange={setCategoria}
        style={styles.picker}
      >
        {categories.map((cat) => (
          <Picker.Item key={cat.value} label={cat.label} value={cat.value} />
        ))}
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="URL da Imagem"
        value={imagem}
        onChangeText={setImagem}
      />
      <Button title="Cadastrar Fornecedor" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    fontSize: 16,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  picker: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    fontSize: 16,
  },
});

export default FornecedorForm;

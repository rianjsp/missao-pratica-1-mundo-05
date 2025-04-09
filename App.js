import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "react-native-vector-icons";

const App = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contato, setContato] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoriaFilter, setCategoriaFilter] = useState("");

  const categories = [
    { label: "Todas as categorias", value: "" },
    { label: "Alimentos", value: "Alimentos" },
    { label: "Tecnologia", value: "Tecnologia" },
    { label: "Comércio", value: "Comercio" },
    { label: "Perfumaria", value: "Perfumaria" },
    { label: "Roupas", value: "Roupas" },
  ];

  // Adicionar fornecedor
  const handleAddFornecedor = () => {
    const fornecedor = { nome, endereco, contato, categoria, imagem };
    setFornecedores([...fornecedores, fornecedor]);
    setNome("");
    setEndereco("");
    setContato("");
    setCategoria("");
    setImagem("");
  };

  // Remover fornecedor
  const handleRemoveFornecedor = (index) => {
    const updatedFornecedores = fornecedores.filter((_, idx) => idx !== index);
    setFornecedores(updatedFornecedores);
  };

  // Filtra fornecedor
  const filteredFornecedores = categoriaFilter
    ? fornecedores.filter(
        (fornecedor) =>
          fornecedor.categoria.toLowerCase().trim() ===
          categoriaFilter.toLowerCase().trim()
      )
    : fornecedores;

  return (
    <View style={styles.container}>
      {/* Form cadastro de fornecedor */}
      <Text style={styles.formLabel}>Cadastrar Fornecedor</Text>
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
      <TextInput
        style={styles.input}
        placeholder="URL da Imagem"
        value={imagem}
        onChangeText={setImagem}
      />

      {/* Picker da categoria */}
      <Picker
        selectedValue={categoria}
        onValueChange={setCategoria}
        style={styles.picker}
      >
        {categories.map((cat) => (
          <Picker.Item key={cat.value} label={cat.label} value={cat.value} />
        ))}
      </Picker>

      <Button title="Cadastrar Fornecedor" onPress={handleAddFornecedor} />

      {/* Filtro da categoria */}
      <Text style={styles.filterLabel}>Filtrar por Categoria</Text>
      <Picker
        selectedValue={categoriaFilter}
        onValueChange={setCategoriaFilter}
        style={styles.picker}
      >
        {categories.map((cat) => (
          <Picker.Item key={cat.value} label={cat.label} value={cat.value} />
        ))}
      </Picker>

      {/* Lista com fornecedores filtrados */}
      <FlatList
        data={filteredFornecedores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            {/* Exibição da imagem */}
            {item.imagem ? (
              <Image source={{ uri: item.imagem }} style={styles.image} />
            ) : null}

            <Text>Nome: {item.nome}</Text>
            <Text>Endereço: {item.endereco}</Text>
            <Text>Contato: {item.contato}</Text>
            <Text>Categoria: {item.categoria}</Text>

            {/* Botão de exclusão */}
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveFornecedor(index)}
            >
              <Ionicons name="close" size={20} color="white" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
    flex: 1,
  },
  formLabel: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    fontSize: 16,
  },
  picker: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    fontSize: 16,
  },
  filterLabel: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
    color: "#333",
  },
  card: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    position: "relative",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  removeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "red",
    borderRadius: 20,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;

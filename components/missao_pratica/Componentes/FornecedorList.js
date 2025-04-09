import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";
import FornecedorCard from "./FornecedorCard";

const FornecedorList = ({ fornecedores, onRemoveFornecedor }) => {
  const [categoriaFilter, setCategoriaFilter] = useState(""); // Filtro de categoria

  // Lista de categorias para o filtro
  const categories = [
    { label: "Todas as categorias", value: "" },
    { label: "Alimentos", value: "Alimentos" },
    { label: "Tecnologia", value: "Tecnologia" },
    { label: "Comércio", value: "Comercio" },
    { label: "Perfumaria", value: "Perfumaria" },
    { label: "Roupas", value: "Roupas" },
  ];

  // Filtra os fornecedores com base na categoria
  const filteredFornecedores = categoriaFilter
    ? fornecedores.filter(
        (fornecedor) =>
          fornecedor.categoria.toLowerCase().trim() ===
          categoriaFilter.toLowerCase().trim()
      )
    : fornecedores;

  return (
    <View style={styles.container}>
      {/* Label do filtro */}
      <Text style={styles.labelPicker}>Filtrar por Categoria</Text>

      {/* Picker para categoria */}
      <Picker
        selectedValue={categoriaFilter}
        onValueChange={setCategoriaFilter}
        style={styles.picker}
      >
        {categories.map((cat) => (
          <Picker.Item key={cat.value} label={cat.label} value={cat.value} />
        ))}
      </Picker>

      {/* Lista filtrada */}
      <FlatList
        data={filteredFornecedores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <FornecedorCard
            key={index}
            fornecedor={item}
            onRemove={() => onRemoveFornecedor(index)}
          />
        )}
        contentContainerStyle={styles.listContainer}
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
  labelPicker: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  picker: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "#f8f8f8",
    color: "#555",
  },
  listContainer: {
    paddingBottom: 20,
  },
});

export default FornecedorList;

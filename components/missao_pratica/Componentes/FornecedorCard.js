import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const FornecedorCard = ({ fornecedor, onRemove }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: fornecedor.imagem }} style={styles.image} />
      <Text>Nome: {fornecedor.nome}</Text>
      <Text>Endereço: {fornecedor.endereco}</Text>
      <Text>Contato: {fornecedor.contato}</Text>
      <Text>Categoria: {fornecedor.categoria}</Text>
      <Button title="Remover" onPress={onRemove} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
    paddingTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default FornecedorCard;

import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function SearchBar({ setSearchTerm }) {
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search Audio Notes"
        onChangeText={(text) => setSearchTerm(text)}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    padding: 10,
  },
  input: {
    marginTop: 20,
    // borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    width: '95%',
    backgroundColor: '#fff5eb',
    alignSelf: 'center',
    height: '40',

  },
});

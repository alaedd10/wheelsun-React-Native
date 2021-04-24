import React, { useContext } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors, Strings } from "../../constants";
import GlobalContext from "../../contexts/GlobalContext";

const SearchBar = () => {
  const { language } = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder={Strings[language].components.searchBar.placeholder}
        placeholderTextColor={Colors.secondary}
      />
      <View style={styles.icon}>
        <Ionicons name="md-search" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 40,
    marginVertical: 15,
    paddingLeft: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.medium,
    overflow: "hidden",
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: Colors.secondary,
  },
  icon: {
    backgroundColor: Colors.primary,
    height: "100%",
    width: 42,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchBar;

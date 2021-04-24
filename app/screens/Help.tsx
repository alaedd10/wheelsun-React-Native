import React, { useContext } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import Header from "../components/Header";
import { Colors, Strings } from "../constants";
import GlobalContext from "../contexts/GlobalContext";
import { helpArray } from "../utilities/utilities";

const Help = () => {
  const { language } = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <Header style={styles.header} title={Strings[language].headers.help} />
      <FlatList
        data={helpArray}
        keyExtractor={(itemFromList) => itemFromList.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.paragraph}>{item.paragraph}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 30,
  },
  textContainer: {
    marginVertical: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
  paragraph: {
    fontSize: 16,
    color: Colors.black,
  },
});

export default Help;

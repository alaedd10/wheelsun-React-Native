import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import BigCard from "../components/BigCard/BigCard";
import { Strings } from "../constants";
import { newsArray } from "../utilities/utilities";
import GlobalContext from "../contexts/GlobalContext";

const Newsletter = () => {
  const { language } = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <Header title={Strings[language].headers.news} />
      <SearchBar />
      <FlatList
        data={newsArray}
        keyExtractor={(itemFromList) => itemFromList.id.toString()}
        renderItem={({ item }) => (
          <BigCard
            title={item.title}
            description={item.description}
            imageSource={item.image}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Newsletter;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors } from "../../constants";

const ListEmptyMessage = ({ message }: { message: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 170,
  },
  message: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
  },
});

export default ListEmptyMessage;

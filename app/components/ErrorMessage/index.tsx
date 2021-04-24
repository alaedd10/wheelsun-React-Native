import React from "react";
import { Text, StyleSheet } from "react-native";

const index = ({ message }: { message: string }) => {
  return <Text style={styles.error}>{message}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default index;

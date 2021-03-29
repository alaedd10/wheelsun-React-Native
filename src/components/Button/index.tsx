import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Values } from "../../constants";
type ButtonTypes = {
  text: String;
};
const index = ({ text }: ButtonTypes) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.buttonBgColor,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: Values.buttonTextSize,
    fontWeight: "700",
    color: Colors.buttonTextColor,
  },
});

export default index;

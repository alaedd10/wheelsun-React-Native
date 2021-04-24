import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Values } from "../../constants";
type ButtonProps = {
  text: String;
  textStyle?: Object;
  containerStyle?: Object;
  onPress?: () => void;
};
const index = ({ text, containerStyle, textStyle, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
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
    color: Colors.white,
  },
});

export default index;

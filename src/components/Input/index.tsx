import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colors, Values } from "../../constants";
type inputProps = {
  label: string;
  placeholder?: string;
  isPassword?: boolean;
  [otherProps: string]: any;
};
const input = ({
  label,
  placeholder = "",
  isPassword = false,
  ...otherProps
}: inputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
  },
  label: {
    fontSize: Values.labelTextSize,
    color: Colors.textColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginVertical: 10,
    alignSelf: "flex-start",
  },
  input: {
    // elevation: 8,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: Colors.inputBorderColor,
    borderWidth: 0.5,
    width: "100%",
    height: 50,
    backgroundColor: Colors.inputBgColor,
  },
});

export default input;

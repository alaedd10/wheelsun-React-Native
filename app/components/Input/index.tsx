import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colors, Values } from "../../constants";
type InputProps = {
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
  [otherProps: string]: any;
  style?: Object;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
};
const input = ({
  label,
  placeholder = "",
  isPassword = false,
  style,
  onChangeText,
  onFocus,
  ...otherProps
}: InputProps) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.secondary}
        secureTextEntry={isPassword}
        {...otherProps}
        onChangeText={onChangeText}
        onFocus={onFocus}
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
    color: Colors.tertiary,
    fontWeight: "bold",
    textTransform: "uppercase",
    alignSelf: "flex-start",
    marginVertical: 5,
  },
  input: {
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: Colors.medium,
    borderWidth: 0.5,
    width: "100%",
    height: 44,
    backgroundColor: Colors.light,
    fontSize: 14,
  },
});

export default input;

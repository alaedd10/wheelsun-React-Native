import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../constants";

// const minValue = 0.5;
// const maxValue = 3;

const NumericInput = ({
  minValue,
  maxValue,
  onValueChange,
}: {
  minValue: number;
  maxValue: number;
  onValueChange: (x: number) => void;
}) => {
  const [result, setResult] = useState(minValue);

  const substraction = () => {
    if (result === minValue) return;
    setResult((prev) => prev - minValue);
    onValueChange(result - minValue);
  };

  const addition = () => {
    if (result === maxValue) return;
    setResult((prev) => prev + minValue);
    onValueChange(result + minValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={substraction}
        style={[styles.minusContainer, styles.operandContainer]}
      >
        <Text style={styles.operand}>-</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>
      <TouchableOpacity
        onPress={addition}
        style={[styles.plusContainer, styles.operandContainer]}
      >
        <Text style={styles.operand}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 150,
    borderRadius: 15,
    backgroundColor: Colors.light,
    height: 40,
    alignItems: "center",
  },
  operandContainer: {
    borderColor: Colors.primary,
    borderWidth: 0.5,
    flex: 1.5,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  minusContainer: {
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  inputContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.medium,
    borderWidth: 0.5,
    height: "100%",
  },
  plusContainer: {
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
  operand: { fontSize: 18, fontWeight: "bold", color: Colors.white },
  result: {
    fontSize: 18,
    color: Colors.black,
  },
});

export default NumericInput;

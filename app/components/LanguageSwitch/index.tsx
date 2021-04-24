import React, { useState } from "react";
import { Switch, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants";

type LanguageSwitchProps = {
  value: boolean;
  onValueChange: () => void;
};

const LanguageSwitch = ({ value, onValueChange }: LanguageSwitchProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ENG</Text>
      <Switch
        trackColor={{
          false: "rgba(221, 133, 34, 0.5)",
          true: "rgba(221, 133, 34, 0.5)",
        }}
        thumbColor={Colors.primary}
        ios_backgroundColor="rgba(221, 133, 34, 0.5)"
        onValueChange={onValueChange}
        value={value}
      />
      <Text style={styles.text}>FR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    top: 40,
    // right: 20,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    marginHorizontal: 5,
    color: Colors.tertiary,
    fontWeight: "bold",
  },
});

export default LanguageSwitch;

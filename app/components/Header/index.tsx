import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Values, Colors } from "../../constants";

type HeaderProps = {
  title: string;
  style?: Object;
  arrow?: boolean;
  onArrowPress?: () => void;
};

const header = ({ title, style, arrow = false, onArrowPress }: HeaderProps) => {
  return (
    <View style={[styles.container, style]}>
      {arrow && (
        <TouchableOpacity
          style={styles.arrowBackContainer}
          onPress={onArrowPress}
        >
          <MaterialIcons name="arrow-back" size={26} color={Colors.secondary} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  arrowBackContainer: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  title: {
    fontSize: Values.buttonTextSize,
    fontWeight: "700",
    color: Colors.secondary,
  },
});

export default header;

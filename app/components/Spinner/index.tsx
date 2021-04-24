import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Colors } from "../../constants";

type SpinnerProps = {
  visible: boolean;
  style?: Object;
};

function Spinner({ visible = false, style }: SpinnerProps) {
  if (!visible) return null;

  return (
    <View style={[styles.overlay, style]}>
      <ActivityIndicator size={80} color={Colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    opacity: 0.8,
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Spinner;

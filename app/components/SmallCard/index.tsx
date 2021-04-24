import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../constants";

type smallCardProps = {
  children: ReactNode;
  onPress?: () => void;
};
const SmallCard = ({ children, onPress }: smallCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 140,
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 8,
    backgroundColor: Colors.white,
  },
});

export default SmallCard;

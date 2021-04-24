import React, { ReactNode } from "react";
import {
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../../constants/Colors";

type modalProps = {
  visible: boolean;
  children?: ReactNode;
  onPress?: () => void;
};

const ModalComponent = ({ visible, children, onPress }: modalProps) => {
  return (
    <Modal animationType="fade" visible={visible} transparent={true}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.overlay}></View>
      </TouchableWithoutFeedback>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100%",
    height: "60%",
  },
  centeredView: {
    position: "absolute",
    bottom: 0,
    height: "40%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalView: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    backgroundColor: Colors.white,
  },
});

export default ModalComponent;

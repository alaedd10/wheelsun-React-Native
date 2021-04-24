import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import LottieView from "lottie-react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import Button from "../Button";
import ModalComponent from "../Modal";
import { Colors, Strings } from "../../constants";
import GlobalContext from "../../contexts/GlobalContext";

type ConnectionProps = {
  bikeTitle: string;
  bikeBattery: string;
  onConnectionOK: () => void;
};

const ConnectionModal = ({
  bikeTitle,
  bikeBattery,
  onConnectionOK,
}: ConnectionProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [lottieVisible, setLottieVisible] = useState(false);
  const [bikeVisible, setBikeVisible] = useState(false);
  const [lottieTitle, setLottieTitle] = useState("");

  const { language } = useContext(GlobalContext);

  const scan = () => {
    setLottieTitle(Strings[language].components.connectionModal.lottieScaning);
    setModalVisible(!modalVisible);
    setLottieVisible(true);
    setTimeout(() => {
      setLottieVisible(false);
      setBikeVisible(true);
    }, 4000);
  };

  const CnxModalClosed = () => {
    setModalVisible(!modalVisible);
    setBikeVisible(false);
  };

  const connect = () => {
    setLottieTitle(
      Strings[language].components.connectionModal.lottieConnecting
    );
    setBikeVisible(false);
    setLottieVisible(true);
    setTimeout(() => {
      setBikeVisible(true);
      setLottieVisible(false);
      CnxModalClosed();
      Alert.alert(
        Strings[language].components.connectionModal.alertSuccessTitle,
        Strings[language].components.connectionModal.alertSuccessText,
        [
          {
            text: "OK",
            onPress: onConnectionOK,
          },
        ]
      );
    }, 2000);
  };

  return (
    <>
      <TouchableOpacity onPress={scan} style={styles.connectBtn}>
        <MaterialCommunityIcons
          name="bluetooth-connect"
          size={36}
          color={Colors.white}
        />
      </TouchableOpacity>
      <ModalComponent visible={modalVisible} onPress={CnxModalClosed}>
        <View style={styles.cnxContainer}>
          {lottieVisible && (
            <>
              <Text style={styles.modalTitle}>{lottieTitle}</Text>
              <LottieView
                source={require("../../assets/animations/bluetooth.json")}
                autoPlay
                loop
              />
            </>
          )}
          {bikeVisible && (
            <View style={styles.cnxContainer}>
              <Text style={styles.modalTitle}>
                {Strings[language].components.connectionModal.modalTitle}
              </Text>
              <View style={styles.imageContainer}>
                <Text
                  style={[
                    styles.text,
                    {
                      borderBottomColor: Colors.tertiary,
                      borderBottomWidth: 1,
                    },
                  ]}
                >
                  {bikeTitle}
                </Text>

                <Image
                  style={styles.image}
                  source={require("../../assets/smallBike.png")}
                  resizeMethod="resize"
                />

                <View
                  style={[
                    styles.iconContainer,
                    {
                      borderTopColor: Colors.tertiary,
                      borderTopWidth: 1,
                    },
                  ]}
                >
                  <FontAwesome
                    name="battery"
                    color={Colors.tertiary}
                    size={20}
                    style={{ marginRight: 10 }}
                  />
                  <Text style={styles.text}>{bikeBattery}%</Text>
                </View>
              </View>
              <Button
                containerStyle={{ width: "80%", height: 45, marginBottom: -10 }}
                text={
                  Strings[language].components.connectionModal.connectButton
                }
                onPress={connect}
              />
            </View>
          )}
        </View>
      </ModalComponent>
    </>
  );
};

const styles = StyleSheet.create({
  connectBtn: {
    width: 45,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    backgroundColor: "#0a7df0",
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },

  cnxContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
    color: Colors.secondary,
  },
  imageContainer: {
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    backgroundColor: Colors.light,
    borderWidth: 1,
    borderColor: Colors.medium,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: 120,
    height: 120,
    borderRadius: 70,
    marginTop: -10,
  },
  image: {
    width: 80,
    height: 50,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: Colors.tertiary,
    fontWeight: "bold",
  },
});

export default ConnectionModal;

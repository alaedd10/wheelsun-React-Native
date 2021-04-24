import React, { useContext, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../constants";
import ConnectionModal from "../components/ConnectionModal";
import { stationsArray } from "../utilities/utilities";
import RentModal from "../components/RentModal";
import PaymentContext from "../contexts/PaymentContext";

interface Station {
  title: string;
  coordinate: { latitude: number; longitude: number };
  availableBikes: [{ title: string; battery: string; price: string }];
}

export default function Home({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStation, setSelectedStation] = useState<Station>({
    title: "",
    coordinate: { latitude: 0, longitude: 0 },
    availableBikes: [{ title: "", battery: "", price: "" }],
  });

  const paymentContext = useContext(PaymentContext);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 36.800154492540464,
          longitude: 10.186169384315827,
          latitudeDelta: 0.035,
          longitudeDelta: 0.02,
        }}
        style={styles.map}
        showsBuildings={false}
        mapType="terrain"
      >
        {stationsArray.map((station, index) => {
          return (
            <Marker
              key={index}
              coordinate={station.coordinate}
              title={station.title}
              onPress={() => {
                setSelectedStation(station);
                setModalVisible(true);
              }}
            >
              <View style={styles.marker}>
                <FontAwesome5 name="bicycle" size={20} color={Colors.black} />
              </View>
            </Marker>
          );
        })}
      </MapView>
      <RentModal
        navigation={navigation}
        visible={modalVisible}
        selectedStation={selectedStation}
        onPress={() => setModalVisible(!modalVisible)}
      />
      {paymentContext.paymentData.paymentSuccess &&
        !paymentContext.paymentData.connectionSuccess && (
          <ConnectionModal
            bikeTitle={paymentContext.paymentData.bikeTitle}
            bikeBattery={paymentContext.paymentData.bikeBattery}
            onConnectionOK={() =>
              paymentContext.setPaymentData((prev) => ({
                ...prev,
                connectionSuccess: true,
              }))
            }
          />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    flex: 1,
  },
  marker: {
    backgroundColor: Colors.primary,
    width: 32,
    height: 26,
    borderRadius: 10,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

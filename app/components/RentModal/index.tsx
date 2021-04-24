import React, { useContext } from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import ModalComponent from "../Modal";
import { Colors, Strings } from "../../constants";
import BikeListItem from "../BikeListItem";
import BikeListHeader from "../BikeListHeader";
import ListEmptyMessage from "../ListEmptyMessage";
import ListItemSeparator from "../ListItemSeparator";
import GlobalContext from "../../contexts/GlobalContext";

type RentProps = {
  visible: boolean;
  selectedStation: Object;
  navigation: Object;
  onPress: () => void;
};

const RentModal = ({
  navigation,
  visible,
  selectedStation,
  onPress,
}: RentProps) => {
  const { language } = useContext(GlobalContext);
  return (
    <ModalComponent visible={visible} onPress={onPress}>
      <Text style={styles.stationTitle}>{selectedStation.title}</Text>
      <FlatList
        data={selectedStation.availableBikes}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <BikeListItem
            title={item.title}
            battery={item.battery}
            price={item.price}
            onButtonPress={() => {
              onPress();
              navigation.navigate("Payment", {
                title: item.title,
                battery: item.battery,
                price: item.price,
              });
            }}
          />
        )}
        ListHeaderComponent={() =>
          selectedStation.availableBikes.length > 0 ? <BikeListHeader /> : null
        }
        ItemSeparatorComponent={ListItemSeparator}
        ListEmptyComponent={() => (
          <ListEmptyMessage
            message={Strings[language].components.rentalModal.noBikesMsg}
          />
        )}
      />
    </ModalComponent>
  );
};

const styles = StyleSheet.create({
  stationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
    color: Colors.secondary,
  },
});

export default RentModal;

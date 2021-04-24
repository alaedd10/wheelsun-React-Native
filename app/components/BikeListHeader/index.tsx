import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Strings } from "../../constants";
import GlobalContext from "../../contexts/GlobalContext";

const BikeListHeader = () => {
  const { language } = useContext(GlobalContext);
  return (
    <View style={styles.heading}>
      <Text style={[styles.headingItem, { flex: 2 }]}>
        {Strings[language].components.bikeListHeader.bikeLabel}
      </Text>
      <Text style={[styles.headingItem, { flex: 1 }]}>
        {Strings[language].components.bikeListHeader.batteryLabel}
      </Text>
      <Text style={[styles.headingItem, { flex: 1 }]}>
        {Strings[language].components.bikeListHeader.priceLabel}
      </Text>
      <Text style={[styles.headingItem, { flex: 1 }]}>
        {Strings[language].components.bikeListHeader.rentLabel}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
  },
  headingItem: {
    textAlign: "center",
    fontWeight: "bold",
    borderBottomColor: Colors.tertiary,
    borderBottomWidth: 1,
    color: Colors.tertiary,
    marginRight: 10,
  },
});

export default BikeListHeader;

import React, { useContext } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import { Colors, Strings } from "../../constants";
import GlobalContext from "../../contexts/GlobalContext";
import Button from "../Button";

type BikeListItemProps = {
  title: string;
  battery: string;
  price: string;
  onButtonPress?: () => void;
};

const BikeListItem = ({
  title,
  battery,
  price,
  onButtonPress,
}: BikeListItemProps) => {
  const { language } = useContext(GlobalContext);
  return (
    <View style={styles.bikeContainer}>
      <View style={styles.bikeImageContainer}>
        <Image
          style={styles.bikeImage}
          source={require("../../assets/smallBike.png")}
        />
        <Text style={styles.bikeText}>{title}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.bikeText}>{battery}</Text>
        <Text style={styles.suffix}>%</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.bikeText}>{price}</Text>
        <Text style={styles.suffix}>TND/h</Text>
      </View>
      <Button
        containerStyle={{ width: 70, height: 32 }}
        textStyle={{ fontSize: 14 }}
        text={Strings[language].components.bikeListItem.rentButton}
        onPress={onButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bikeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  bikeImageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bikeText: {
    fontSize: 14,
    color: Colors.black,
  },
  bikeImage: {
    width: 65,
    height: 40,
    marginRight: 7,
  },
  priceContainer: {
    flexDirection: "row",
  },
  suffix: {
    fontSize: 10,
    color: Colors.black,
  },
});
export default BikeListItem;

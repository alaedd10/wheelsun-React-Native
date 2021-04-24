import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { Colors } from "../../constants";

type bigCardProps = {
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
};
const BigCard = ({ imageSource, title, description }: bigCardProps) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image style={styles.image} source={imageSource} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 295,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.medium,
    backgroundColor: Colors.white,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 210,
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
    color: Colors.primary,
  },
  description: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.black,
  },
});

export default BigCard;

import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import Header from "../components/Header";
import Button from "../components/Button";
import { FontAwesome } from "@expo/vector-icons";
import { Strings, Colors } from "../constants";
import NumericInput from "../components/NumericInput";
import Spinner from "../components/Spinner";
import { getCurrentDate } from "../utilities/utilities";
import PaymentContext from "../contexts/PaymentContext";
import GlobalContext from "../contexts/GlobalContext";

const minValue = 0.5;
const maxValue = 3;

const Payment = ({ route, navigation }: any) => {
  const { title, battery } = route.params;
  const [hour, setHour] = useState(minValue);
  const [loading, setLoading] = useState(false);

  const paymentContext = useContext(PaymentContext);
  const { language } = useContext(GlobalContext);

  const pay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        Strings[language].screens.payment.alertSuccessTitle,
        Strings[language].screens.payment.alertSuccessText,
        [
          {
            text: "OK",
            onPress: () => {
              paymentContext.setPaymentData({
                bikeTitle: title,
                bikeBattery: battery,
                hourToRent: hour,
                paymentSuccess: true,
              });
              navigation.goBack();
            },
          },
        ]
      );
    }, 1500);
  };

  return (
    <>
      <Spinner visible={loading} />
      <View style={styles.container}>
        <Header
          title={Strings[language].headers.payment}
          arrow
          onArrowPress={() => navigation.goBack()}
        />
        <View style={styles.paymentCard}>
          <Text style={styles.cardHeader}>
            {Strings[language].screens.payment.cardHeader}
          </Text>
          <View style={styles.paymentDetails}>
            <View style={styles.rowData}>
              <Text style={styles.label}>
                {Strings[language].screens.payment.durationLabel} :
              </Text>
              <View style={styles.iconContainer}>
                <NumericInput
                  minValue={minValue}
                  maxValue={maxValue}
                  onValueChange={(value) => setHour(value)}
                />
              </View>
            </View>

            <View style={styles.rowData}>
              <Text style={styles.label}>
                {Strings[language].screens.payment.bikeLabel} :
              </Text>
              <View style={styles.iconContainer}>
                <FontAwesome name="bicycle" color={Colors.primary} size={30} />
                <Text style={styles.text}>{title}</Text>
              </View>
            </View>

            <View style={styles.rowData}>
              <Text style={styles.label}>
                {Strings[language].screens.payment.batteryLabel} :
              </Text>
              <View style={styles.iconContainer}>
                <FontAwesome name="battery" color={Colors.primary} size={30} />
                <Text style={styles.text}>{battery}%</Text>
              </View>
            </View>

            <View style={styles.rowData}>
              <Text style={styles.label}>
                {Strings[language].screens.payment.dateLabel} :
              </Text>
              <View style={styles.iconContainer}>
                <FontAwesome name="calendar" color={Colors.primary} size={30} />
                <Text style={styles.text}>{getCurrentDate()}</Text>
              </View>
            </View>
          </View>

          <View style={styles.creditCardContainer}>
            <View style={styles.creditCardDetails}>
              <Image
                style={styles.image}
                source={require("../assets/creditCard.png")}
              />
              <Text style={styles.creditCardText}>****8295</Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.priceValue}>{hour * 6}</Text>
              <Text style={styles.suffix}>TND</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text={Strings[language].screens.payment.paymentButton}
            onPress={pay}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  paymentCard: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
    flex: 4,
    backgroundColor: Colors.white,
    marginTop: 20,
    justifyContent: "space-around",
  },
  paymentDetails: {
    borderWidth: 1,
    borderColor: Colors.medium,
    borderRadius: 15,
    padding: 10,
    flex: 3,
    marginVertical: 20,
    justifyContent: "space-around",
  },
  rowData: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: "row",
  },
  label: {
    fontSize: 16,
    marginRight: 5,
    color: Colors.tertiary,
    fontWeight: "bold",
    width: 80,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
    color: Colors.black,
  },
  creditCardContainer: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: Colors.medium,
    borderRadius: 15,
    padding: 10,
    paddingLeft: 0,
    backgroundColor: Colors.light,
  },
  creditCardDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 60,
  },
  creditCardText: {
    fontSize: 16,
    color: Colors.black,
  },
  price: {
    flexDirection: "row",
  },
  priceValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.tertiary,
  },
  suffix: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.tertiary,
  },
  cardHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.secondary,
    textAlign: "center",
  },
  cancelButton: {
    borderWidth: 1.5,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
    marginTop: 10,
  },
  cancelButtonText: {
    color: Colors.primary,
  },
});

export default Payment;

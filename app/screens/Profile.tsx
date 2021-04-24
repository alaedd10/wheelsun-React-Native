import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import SmallCard from "../components/SmallCard";
import Header from "../components/Header";
import { Colors, Strings } from "../constants";
import { EditPhoto } from "../components/SvgImages";
import * as SecureStore from "expo-secure-store";

import GlobalContext from "../contexts/GlobalContext";
import PaymentContext from "../contexts/PaymentContext";

const Profile = () => {
  const { user, setUserToken, language } = useContext(GlobalContext);
  const { setPaymentData } = useContext(PaymentContext);

  const handleLogout = () => {
    setUserToken(null);
    setPaymentData({ connectionSuccess: false, paymentSuccess: false });
    SecureStore.deleteItemAsync("userToken");
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Header title={Strings[language].headers.profile} />
        <View style={styles.userData}>
          <EditPhoto />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.cardRow}>
          <SmallCard>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="history"
                size={26}
                color={Colors.white}
              />
            </View>
            <Text style={styles.cardTitle}>
              {Strings[language].screens.profile.historyCard}
            </Text>
          </SmallCard>
          <SmallCard>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="credit-card-outline"
                size={26}
                color={Colors.white}
              />
            </View>
            <Text style={styles.cardTitle}>
              {Strings[language].screens.profile.paymentCard}
            </Text>
          </SmallCard>
        </View>

        <View style={styles.cardRow}>
          <SmallCard>
            <View style={styles.iconContainer}>
              <FontAwesome name="tag" size={26} color={Colors.white} />
            </View>
            <Text style={styles.cardTitle}>
              {Strings[language].screens.profile.promoCard}
            </Text>
          </SmallCard>
          <SmallCard onPress={handleLogout}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="logout"
                size={26}
                color={Colors.white}
              />
            </View>
            <Text style={styles.cardTitle}>
              {Strings[language].screens.profile.logoutCard}
            </Text>
          </SmallCard>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    paddingBottom: 60,
  },
  top: {
    flex: 1.5,
    alignItems: "center",
  },
  userData: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontWeight: "700",
    color: Colors.secondary,
    fontSize: 20,
    marginTop: 10,
  },
  email: {
    fontSize: 15,
    color: "#97ADB6",
  },
  bottom: {
    flex: 2,
    alignItems: "center",
  },
  cardRow: {
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 18,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: "700",
    color: Colors.secondary,
    fontSize: 15,
    textAlign: "center",
  },
});

export default Profile;

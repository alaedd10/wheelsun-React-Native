import React, { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigations/AuthNavigator";
import AppNavigator from "./app/navigations/AppNavigator";
import myTheme from "./app/navigations/navigationTheme";
import * as SecureStore from "expo-secure-store";

import GlobalContext from "./app/contexts/GlobalContext";
import PaymentContext from "./app/contexts/PaymentContext";
import AppLoading from "expo-app-loading";
import CountDown from "react-native-countdown-component";
import Walkthrough from "./app/screens/Walkthrough";
import { Alert } from "react-native";
import { Strings } from "./app/constants";

export default function App() {
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [language, setLanguage] = useState("fr");
  const [paymentData, setPaymentData] = useState({
    paymentSuccess: false,
    connectionSuccess: false,
  });
  const [isReady, setIsReady] = useState(false);
  const [walkthrough, setWalkthrough] = useState(true);

  const restoreToken = async () => {
    try {
      const userToken = await SecureStore.getItemAsync("userToken");
      if (userToken !== null) {
        setUserToken(JSON.parse(userToken));
        setUser(JSON.parse(userToken));
      }
    } catch (e) {
      Alert.alert("Error fetching userToken");
    }
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );

  return (
    <GlobalContext.Provider
      value={{ user, userToken, language, setUserToken, setLanguage, setUser }}
    >
      {walkthrough && (
        <Walkthrough
          onPress={() => setWalkthrough(false)}
          onSkip={() => setWalkthrough(false)}
        />
      )}
      {!walkthrough && (
        <NavigationContainer theme={myTheme}>
          {!userToken ? (
            <AuthNavigator></AuthNavigator>
          ) : (
            <PaymentContext.Provider value={{ paymentData, setPaymentData }}>
              {paymentData.connectionSuccess && (
                <View
                  style={{
                    position: "absolute",
                    bottom: 50,
                    elevation: 1,
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <CountDown
                    until={paymentData.hourToRent * 3600}
                    onFinish={() =>
                      Alert.alert(
                        Strings[language].components.countDown.finishAlertTitle,
                        Strings[language].components.countDown.finishAlertText,
                        [
                          {
                            text: "OK",
                            onPress: () => {
                              setPaymentData((prev) => ({
                                ...prev,
                                connectionSuccess: false,
                                paymentSuccess: false,
                              }));
                            },
                          },
                        ]
                      )
                    }
                    size={20}
                    timeToShow={["H", "M", "S"]}
                    timeLabels={{ m: null, s: null }}
                    showSeparator
                  />
                </View>
              )}
              <AppNavigator></AppNavigator>
            </PaymentContext.Provider>
          )}
        </NavigationContainer>
      )}
    </GlobalContext.Provider>
  );
}

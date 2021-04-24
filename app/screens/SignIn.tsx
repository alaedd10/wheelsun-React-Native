import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useKeyboard } from "@react-native-community/hooks";
import * as SecureStore from "expo-secure-store";

import { Colors, Values, Strings } from "../constants";
import Input from "../components/Input";
import Header from "../components/Header";
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import GlobalContext from "../contexts/GlobalContext";
import LanguageSwitch from "../components/LanguageSwitch";

const height = Dimensions.get("window").height;

export default function SignIn({ navigation }: any) {
  const keyboard = useKeyboard();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
    password: string;
  } | null>(null);

  const { setUser, setUserToken, language, setLanguage } = useContext(
    GlobalContext
  );

  const [isFrench, setIsFrench] = useState(language === "fr" ? true : false);

  useEffect(() => {
    if (isFrench) setLanguage("fr");
    else setLanguage("eng");
  }, [isFrench]);

  useEffect(() => {
    getUser();
  }, []);

  const toggleSwitch = () => {
    setIsFrench((previousState) => !previousState);
  };

  const getUser = async () => {
    try {
      const userData = await SecureStore.getItemAsync("userData");
      if (userData !== null) {
        setUserData(JSON.parse(userData));
        setUser(JSON.parse(userData));
      }
    } catch (e) {
      Alert.alert("Error fetching user");
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const checkUser = async () => {
    if (!email || !password)
      return setError(Strings[language].validationMessages.allFieldsRequired);
    setLoading(true);
    setTimeout(async () => {
      if (
        !userData ||
        email !== userData.email ||
        password !== userData.password
      ) {
        setLoading(false);
        setError(Strings[language].validationMessages.invalidInputs);
      } else {
        setLoading(false);
        resetForm();
        await SecureStore.setItemAsync("userToken", JSON.stringify(userData));
        setUserToken(userData);
      }
    }, 1000);
  };

  return (
    <>
      <Spinner visible={loading} />
      <LanguageSwitch value={isFrench} onValueChange={toggleSwitch} />
      <TouchableWithoutFeedback
        onPress={() => {
          if (keyboard.keyboardShown) Keyboard.dismiss();
        }}
      >
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.top}>
            <Header title={Strings[language].headers.signIn} />
            <View style={styles.formContainer}>
              <ErrorMessage message={error} />
              <Input
                label={Strings[language].screens.signIn.labelEmail}
                keyboardType="email-address"
                value={email}
                onChangeText={(email) => setEmail(email)}
                onFocus={() => setError("")}
              />
              <Input
                label={Strings[language].screens.signIn.labelPassword}
                isPassword={true}
                value={password}
                onChangeText={(password) => setPassword(password)}
                onFocus={() => setError("")}
              />
              <Button
                text={Strings[language].screens.signIn.signInButton}
                containerStyle={styles.button}
                onPress={checkUser}
              />
            </View>
          </View>

          <View style={styles.bottom}>
            <View>
              <View style={styles.separatorContainer}>
                <View style={styles.smallSeparator} />
                <Text style={styles.separatorText}>
                  {Strings[language].screens.signIn.socialSignIn}
                </Text>
                <View style={styles.smallSeparator} />
              </View>
              <View style={styles.socialContainer}>
                <FontAwesome5 name="facebook" size={35} color={Colors.medium} />
                <FontAwesome5 name="twitter" size={35} color={Colors.medium} />
                <FontAwesome5 name="google" size={35} color={Colors.medium} />
              </View>
            </View>

            <View style={styles.bottomText}>
              <Text style={styles.text}>
                {Strings[language].screens.signIn.signUpText}{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
                <Text style={styles.link}>
                  {Strings[language].screens.signIn.signUpLink}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  top: {
    flex: 1.75,
  },
  bottom: {
    flex: 1,
    justifyContent: "space-between",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
  },
  separatorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  smallSeparator: {
    height: 1,
    backgroundColor: "#D5DDE0",
    flex: 1,
  },
  separatorText: {
    fontSize: Values.labelTextSize,
    color: Colors.tertiary,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginHorizontal: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  bottomText: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    color: "#97ADB6",
    fontSize: 15,
  },
  link: {
    color: Colors.primary,
    textDecorationLine: "underline",
    fontSize: 15,
  },
});

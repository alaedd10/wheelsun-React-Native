import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Colors, Strings } from "../constants";
import { useKeyboard } from "@react-native-community/hooks";
import * as SecureStore from "expo-secure-store";

import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import GlobalContext from "../contexts/GlobalContext";

const height = Dimensions.get("window").height;

export default function SignUp({ navigation }: any) {
  const keyboard = useKeyboard();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { language } = useContext(GlobalContext);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const storeUser = async () => {
    const userData = { name, email, password };
    try {
      if (!name || !email || !password)
        return setError(Strings[language].validationMessages.allFieldsRequired);
      setLoading(true);
      await SecureStore.setItemAsync("userData", JSON.stringify(userData));
      setTimeout(() => {
        setLoading(false);
        resetForm();
        Alert.alert(
          Strings[language].screens.signUp.alertSuccessTitle,
          Strings[language].screens.signUp.alertSuccessText,
          [
            {
              text: Strings[language].screens.signUp.alertSuccesBtn,
              onPress: () => navigation.push("Sign In"),
            },
          ]
        );
      }, 1500);
    } catch (e) {
      setTimeout(() => {
        setLoading(false);
        resetForm();
        Alert.alert("Error Signing up");
      }, 1000);
    }
  };

  return (
    <>
      <Spinner visible={loading} />
      <TouchableWithoutFeedback
        onPress={() => {
          if (keyboard.keyboardShown) Keyboard.dismiss();
        }}
      >
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.top}>
            <Header title={Strings[language].headers.signUp} />
            <View style={styles.formContainer}>
              <ErrorMessage message={error} />
              <Input
                label={Strings[language].screens.signUp.labelName}
                value={name}
                onChangeText={(name) => setName(name)}
                onFocus={() => setError("")}
              />
              <Input
                label={Strings[language].screens.signUp.labelEmail}
                value={email}
                keyboardType="email-address"
                onChangeText={(email) => setEmail(email)}
                onFocus={() => setError("")}
              />
              <Input
                label={Strings[language].screens.signUp.labelPassword}
                value={password}
                isPassword={true}
                onChangeText={(password) => setPassword(password)}
                onFocus={() => setError("")}
              />
              <Button
                text={Strings[language].screens.signUp.signUpButton}
                containerStyle={styles.button}
                onPress={storeUser}
              />
            </View>
          </View>

          <View style={styles.bottom}>
            <View style={styles.bottomText}>
              <Text style={styles.text}>
                {Strings[language].screens.signUp.signInText}{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.push("Sign In")}>
                <Text style={styles.link}>
                  {Strings[language].screens.signUp.signInLink}
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
    flex: 1.5,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
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

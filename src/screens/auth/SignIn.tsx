import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors, Values, Strings } from "../../constants";
import Input from "../../components/Input";
import Header from "../../components/Header";
import Button from "../../components/Button";

export default class SignIn extends Component {
  //   navigate() {
  //     this.props.navigation.navigate("Sign In");
  //   }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Header title={Strings.Header.signIn} />
        <View style={styles.inputs}>
          <Input label={Strings.Layout.signIn.labelEmail} />
          <Input label={Strings.Layout.signIn.labelPassword} isPassword={true} />
        </View>
        <Button text={Strings.Button.signInButton} />
        <View style={styles.separatorContainer}>
          <View style={styles.smallSeparator} />
          <Text style={styles.separatorText}>{Strings.Button.socialSignIn}</Text>
          <View style={styles.smallSeparator} />
        </View>
        <View style={styles.socialContainer}>
          <FontAwesome5
            name="facebook"
            size={35}
            color={Colors.inputBorderColor}
          />
          <FontAwesome5
            name="twitter"
            size={35}
            color={Colors.inputBorderColor}
          />
          <FontAwesome5
            name="google"
            size={35}
            color={Colors.inputBorderColor}
          />
        </View>
        <Text style={styles.bottomText}>
          Don’t have an account? <Text style={styles.link}>Sign up</Text>
        </Text>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
  },
  inputs: {
    marginTop: 50,
    marginBottom: 20,
  },
  separatorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  smallSeparator: {
    height: 1,
    backgroundColor: "#D5DDE0",
    flex: 1,
  },
  separatorText: {
    fontSize: Values.labelTextSize,
    color: Colors.textColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginHorizontal: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 60,
  },
  bottomText: {
    color: "#97ADB6",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 65,
  },
  link: { color: Colors.buttonBgColor, textDecorationLine: "underline" },
});

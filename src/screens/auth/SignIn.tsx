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
import { Colors, Values } from "../../constants";
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
        <Header title={"SIGN IN"} />
        <View style={styles.inputs}>
          <Input label={"email"} />
          <Input label={"password"} isPassword={true} />
        </View>
        <Button text={"Sign In"} />
        <View style={styles.separatorContainer}>
          <View style={styles.smallSeparator} />
          <Text style={styles.separatorText}>Or Sign IN WIth</Text>
          <View style={styles.smallSeparator} />
        </View>
        <View style={styles.socialContainer}>
          <FontAwesome5
            name="facebook"
            size={50}
            color={Colors.inputBorderColor}
          />
          <FontAwesome5
            name="twitter"
            size={50}
            color={Colors.inputBorderColor}
          />
          <FontAwesome5
            name="google"
            size={50}
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
    marginTop: 100,
    marginBottom: 60,
  },
  separatorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 70,
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
    marginBottom: 119,
  },
  bottomText: {
    color: "#97ADB6",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 65,
  },
  link: { color: Colors.buttonBgColor, textDecorationLine: "underline" },
});

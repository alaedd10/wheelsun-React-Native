import React, { Component } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Colors, Values, Strings } from "../../constants";

export default class SignUp extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.top}>
          <Header title={Strings.Headers.signUp} />
          <View style={styles.inputs}>
            <Input label={Strings.Layouts.signUp.labelName} />
            <Input
              label={Strings.Layouts.signUp.labelEmail}
              keyboardType="email-address"
            />
            <Input
              label={Strings.Layouts.signUp.labelPassword}
              isPassword={true}
            />
          </View>
        </View>

        <View style={styles.bottom}>
          <Button text={Strings.Buttons.signUpButton} />

          <Text style={styles.bottomText}>
            Don’t have an account? <Text style={styles.link}>Sign up</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
  },
  top: {
    flex: 1.5,
    justifyContent: "space-between",
  },
  bottom: {
    flex: 1,
    justifyContent: "space-between",
  },
  inputs: {
    marginTop: 50,
    marginBottom: 60,
  },
  bottomText: {
    color: "#97ADB6",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 65,
  },
  link: {
    color: Colors.buttonBgColor,
    textDecorationLine: "underline",
  },
});

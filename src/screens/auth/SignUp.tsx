import React, { Component } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Colors, Values } from "../../constants";

export default class SignUp extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Header title={"SIGN UP"} />
        <View style={styles.inputs}>
          <Input label={"name"} />
          <Input label={"email"} />
          <Input label={"password"} isPassword={true} />
        </View>
        <Button text={"Sign Up"} />
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
    marginBottom: 95,
  },
  bottomText: {
    color: "#97ADB6",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 65,
  },
  link: { color: Colors.buttonBgColor, textDecorationLine: "underline" },
});

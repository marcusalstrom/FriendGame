import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
} from "react-native";

function LoginScreen(props) {
  const navigation = useNavigation();

  const createTwoButtonAlert = () =>
    Alert.alert("Alert", "Login Pressed", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => {
          navigation.navigate("QuestionScreen");
        }}
      ></TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
      />

      <TouchableOpacity
        onPress={createTwoButtonAlert}
        style={styles.loginButton}
      ></TouchableOpacity>
      <TouchableOpacity style={styles.registerButton}></TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end", // aligns items vertically
  },
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    width: "80%",
    alignSelf: "center",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  loginButton: {
    width: "80%",
    alignSelf: "center",
    height: 70,
    borderRadius: 100,
    marginBottom: 10,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "80%",
    alignSelf: "center",
    height: 70,
    borderRadius: 100,
    marginBottom: 40,
    backgroundColor: "#4ecdc4",
  },
});

export default LoginScreen;

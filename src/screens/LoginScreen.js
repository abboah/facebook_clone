import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [isTyping, setIsTyping] = useState(false);
  const navigation = useNavigation();

  const handleInputChange = () => {
    if (!isTyping) {
      setIsTyping(true);
    }
  };

  const handleLogin = () => {
    alert("Login button pressed");
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleCreateAccount = () => {
    alert("Create Account button pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.keyboardAvoidingView}
      >
        <Image
          style={styles.backgroundLogo}
          source={require("../../assets/Background.png")}
        />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.content}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.logo}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email or Phone"
              onChangeText={handleInputChange}
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleInputChange}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <Image source={require("../../assets/OR.png")} style={styles.OR} />
            <TouchableOpacity
              style={styles.createAccountButton}
              onPress={handleCreateAccount}
            >
              <Text style={styles.createAccountText}>
                Create New Flink Account
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  keyboardAvoidingView: {
    flex: 1,
    width: "100%",
  },
  content: {
    position: "absolute",
    alignItems: "center",
    width: "100%",
  },
  backgroundLogo: {
    width: 415,
    height: 438,
    resizeMode: "contain",
    marginTop: -14,
  },
  logo: {
    width: 70,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
    marginTop: 250,
  },
  textInput: {
    width: "70%",
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "white",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#FE6B35",
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: "center",
    width: 300,
    marginTop: 55,
    shadowColor: "#0e23e1",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.21,
    shadowRadius: 8.19,
    elevation: 11,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#384CFF",
    textAlign: "center",
    fontSize: 13,
    marginTop: 25,
    fontWeight: "bold",
  },
  OR: {
    marginTop: 50,
  },
  createAccountButton: {
    borderWidth: 1,
    borderColor: "#384CFF",
    paddingVertical: 5,
    borderRadius: 50,
    marginTop: 30,
    alignItems: "center",
    width: "50%",
  },
  createAccountText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
  searchByEmailButton: {
    marginTop: 20,
  },
  searchByEmailText: {
    color: "#384CFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;

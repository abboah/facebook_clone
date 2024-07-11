import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

const SearchByEmailScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFindAccount = () => {
    navigation.navigate("OTPVerification");
  };

  const handleSearchByNumber = () => {
    navigation.navigate("ForgotPassword"); // Navigate back to ForgotPasswordScreen
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.inner}>
          <Text style={styles.title}>Enter your email address</Text>
          <TextInput
            placeholder="Email"
            style={[styles.textInput, isFocused && styles.textInputFocused]}
            keyboardType="email-address"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <TouchableOpacity style={styles.button} onPress={handleFindAccount}>
            <Text style={styles.buttonText}>Find Your Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSearchByNumber}
            style={styles.searchByNumberButton}
          >
            <Text style={styles.searchByNumberText}>
              Search by Number Instead
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inner: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    right: 50,
    left: 50,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  backButtonText: {
    fontSize: 18,
    color: "#384CFF",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  textInput: {
    width: "100%",
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
  textInputFocused: {
    borderBottomColor: "#384CFF", // Change border color when focused
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: "#FE6B35",
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
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
    fontSize: 14,
    fontWeight: "bold",
  },
  searchByNumberButton: {
    position: "absolute",
    top: 400,
  },
  searchByNumberText: {
    color: "#384CFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SearchByEmailScreen;

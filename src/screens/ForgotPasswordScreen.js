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

const ForgotPasswordScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFindAccount = () => {
    navigation.navigate("OTPVerification");
  };
  const handleSearchByEmail = () => {
    navigation.navigate("SearchByEmail"); // Navigate to SearchByEmailScreen
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.inner}>
            <Text style={styles.title}>Enter your phone number</Text>
            <TextInput
              placeholder="Phone Number"
              style={[styles.textInput, isFocused && styles.textInputFocused]}
              keyboardType="phone-pad"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <TouchableOpacity style={styles.button} onPress={handleFindAccount}>
              <Text style={styles.buttonText}>Find Your Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSearchByEmail}
              style={styles.searchByEmailButton}
            >
              <Text style={styles.searchByEmailText}>
                Search by Email Instead
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

  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  textInput: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
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
    shadowColor: "#384CFF",
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
  searchByEmailButton: {
    position: "absolute",
    top: 400,
  },
  searchByEmailText: {
    color: "#384CFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ForgotPasswordScreen;

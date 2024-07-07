import React from "react";
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
  TouchableWithoutFeedback
} from "react-native";

const ForgotPasswordScreen = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen (LoginScreen)
  };

  const handleFindAccount = () => {
    alert("Find your account button pressed");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.inner}>
          
          <Text style={styles.title}>Enter your phone number</Text>
          <TextInput
            placeholder="Phone Number"
            style={styles.textInput}
            keyboardType="phone-pad"
          />
          <TouchableOpacity style={styles.button} onPress={handleFindAccount}>
            <Text style={styles.buttonText}>Find Your Account</Text>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    position: "absolute",
    top: 50,
    left: 20,
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
  button: {
    backgroundColor: "#FE6B35",
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: "center",
    width: "70%",
    marginTop: 55,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 9.22,
    elevation: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ForgotPasswordScreen;

import React, { useState, useRef, useEffect } from "react";
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

const PasswordResetScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);
  const textInputRef = useRef(null);

  const handleFindAccount = () => {
    alert("Find your account button pressed");
  };
  
  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.inner}>
          
            <Text style = {styles.boldText}>Create new password</Text>
          
          <Text style={styles.title1}>
            You will use the password to acccess your account {'\n'}
            Enter a combination 0f at least 6 numbers, numbers {'\n'} and punctation marks
          </Text>
          <TextInput
            ref={textInputRef}
            placeholder="New Password"
            style={[styles.textInput, isFocused && styles.textInputFocused]}
            keyboardType="default"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <TouchableOpacity style={styles.button} onPress={handleFindAccount}>
            <Text style={styles.buttonText}>Log in</Text>
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
    //justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 15,
    //fontWeight: "300",
    textAlign: "center",
    marginTop: 50,
  },
  boldText: {
    fontWeight: "bold",
    marginTop: 50,
  },
  title1: {
    color: "#A9A9A9", // Light gray color
    //fontStyle: "italic",
    opacity: 0.8,
    textAlign: "center",
    marginTop: 20,
  },
  textInput: {
    width: "85%",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    fontSize: 16,
    marginTop: 15,
    textAlign: "center",
  },
  textInputFocused: {
    borderBottomColor: "#384CFF", // Change border color when focused
    borderBottomWidth: 2,
  },
  button: {
    backgroundColor: "#FE6B35",
    paddingVertical: 8,
    borderRadius: 50,
    alignItems: "center",
    width: "75%",
    marginTop: 25,
    shadowColor: "#0e23e1",
    shadowOffset: {
    width: 0,
    height: 8,
    },
    shadowOpacity:  0.21,
    shadowRadius: 8.19,
    elevation: 11
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  iconContainer: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
    marginLeft: -150,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    width: 22,
    height: 18,
    marginRight: 10,
  },
  iconText: {
    fontSize: 16,
    color: "#000",
  },
});

export default PasswordResetScreen;

// src/screens/CreateAccount/TermsPrivacyScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TermsPrivacyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finishing signing up</Text>
      <Text>
        By tapping Sign Up, you agree to our
        <Text style={styles.link}> Terms, Data Policy</Text> and
        <Text style={styles.link}> Cookies Policy</Text>.
      </Text>
      <Button
        title="Sign Up"
        onPress={() => { /* Handle sign up */ }}
      />
      <Text style={styles.link} onPress={() => { /* Skip linking contacts */ }}>Sign up without updating my contact</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default TermsPrivacyScreen;

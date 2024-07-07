// src/screens/CreateAccount/TermsPrivacyScreen.tsx
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const TermsPrivacyScreen = ({  }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finishing signing up</Text>
      <Text style={styles.subtitle}>By tapping Sign up, you agree to our </Text>
      <Text>
       
        <Text style={styles.link}> Terms, Data Policy</Text> and
        <Text style={styles.link}> Cookies Policy</Text>.
        </Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/screens/CreateAccount/TermsPrivacyScreen")}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => { /* Skip linking contacts */ }}>Sign up without updating my contact</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    marginTop: 60
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16, 
    marginHorizontal: 10,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 50
  },
  button: {
    marginTop: 50,
    marginBottom: 30,
    backgroundColor: '#FE6B35',
    paddingVertical: 12,
    paddingHorizontal: 125,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TermsPrivacyScreen;
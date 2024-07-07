// src/screens/CreateAccount/PasswordScreen.tsx
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const PasswordScreen = ({  }) => {
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a password</Text>
      <Text style={styles.subtitle}>Create a password at least with 6 chaeacters.</Text>
      <Text style={styles.subtitle}>It should be something others couldn’t guess.</Text>
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
     <TouchableOpacity style={styles.button} onPress={() => router.push("/screens/CreateAccount/TermsPrivacyScreen")}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
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

export default PasswordScreen;

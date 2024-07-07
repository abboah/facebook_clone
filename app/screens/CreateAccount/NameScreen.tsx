// src/screens/CreateAccount/NameScreen.tsx
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const NameScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your name?</Text>
      <Text style={styles.subtitle}>Enter the name you use in real life</Text>
      <View style={styles.row}>
      <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={()=> {router.push("/screens/CreateAccount/BirthdayScreen")}}>
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
    marginBottom: 50
  },
  row: {
    flexDirection: 'row',
    
    justifyContent: 'space-between', // Adjusts the space between inputs
    alignItems: 'center', 
    marginBottom: 50,
    width: '100%', // Ensures the row takes full width
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: 'gray',
    flex: 1,
   
    borderBottomWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },button: {
    backgroundColor: '#FE6B35', // Button color
    paddingVertical: 12,
    paddingHorizontal: 125,
    borderRadius: 15, // Adjust this for more or less rounding
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Add shadow for Android
    shadowColor: '#000', // Shadow for iOS
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

export default NameScreen;

// src/screens/CreateAccount/GenderScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';

const GenderScreen = ({  }) => {
  const [gender, setGender] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your gender?</Text>
      <Text style={styles.subtitle}>You can change who sees your gender on your profile later.</Text>
      
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Custom" value="custom" />
      </Picker>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/screens/CreateAccount/MobileNumberScreen")}>
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
  picker: {
    width: '80%',
    marginVertical: 20,
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

export default GenderScreen;

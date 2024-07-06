// src/screens/CreateAccount/GenderScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Picker } from 'react-native';

const GenderScreen = ({ navigation }) => {
  const [gender, setGender] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your gender?</Text>
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Custom" value="custom" />
      </Picker>
      <Button
        title="Next"
        onPress={() => navigation.navigate('MobileNumber')}
      />
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
  picker: {
    width: '80%',
    marginVertical: 20,
  },
});

export default GenderScreen;

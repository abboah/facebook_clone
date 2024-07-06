// src/screens/CreateAccount/BirthdayScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Picker } from 'react-native';

const BirthdayScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your birthday?</Text>
      {/* Replace Picker with a DatePicker if available in your environment */}
      <Picker
        selectedValue={selectedDate}
        onValueChange={(itemValue) => setSelectedDate(itemValue)}
        style={styles.picker}
      >
        {/* Populate with days, months, years */}
      </Picker>
      <Text>25 Years old</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Gender')}
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

export default BirthdayScreen;

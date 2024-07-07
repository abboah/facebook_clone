// src/screens/CreateAccount/BirthdayScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';

const BirthdayScreen = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedMonth, setSelectedMonth] = useState<number>(1);
  const [selectedYear, setSelectedYear] = useState<number>(2000);
  const [age, setAge] = useState<number | null>(null);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  const calculateAge = (day: number, month: number, year: number) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // Month is 0-based in JavaScript
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }
    setAge(age);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your birthday?</Text>
      <Text style={styles.subtitle1}>Choose your date of birth.</Text>
      <Text style={styles.subtitle2}>You can always make this private later.</Text>

      <View style={styles.pickerContainer}>
        <View style={styles.pickerWrapper}>
          <Text style={styles.pickerLabel}>Day</Text>
          <Picker
            selectedValue={selectedDay}
            onValueChange={(itemValue) => {
              setSelectedDay(itemValue);
              calculateAge(itemValue, selectedMonth, selectedYear);
            }}
            style={styles.picker}
          >
            {days.map((day) => (
              <Picker.Item key={day} label={`${day}`} value={day} />
            ))}
          </Picker>
        </View>

        <View style={styles.pickerWrapper}>
          <Text style={styles.pickerLabel}>Month</Text>
          <Picker
            selectedValue={selectedMonth}
            onValueChange={(itemValue) => {
              setSelectedMonth(itemValue);
              calculateAge(selectedDay, itemValue, selectedYear);
            }}
            style={styles.picker}
          >
            {months.map((month) => (
              <Picker.Item key={month} label={`${month}`} value={month} />
            ))}
          </Picker>
        </View>

        <View style={styles.pickerWrapper}>
          <Text style={styles.pickerLabel}>Year</Text>
          <Picker
            selectedValue={selectedYear}
            onValueChange={(itemValue) => {
              setSelectedYear(itemValue);
              calculateAge(selectedDay, selectedMonth, itemValue);
            }}
            style={styles.picker}
          >
            {years.map((year) => (
              <Picker.Item key={year} label={`${year}`} value={year} />
            ))}
          </Picker>
        </View>
      </View>

      <Text style={styles.ageText}>
        {age !== null ? `Age: ${age}` : 'Please select your date of birth.'}
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/screens/CreateAccount/GenderScreen")}>
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
    padding: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 60,
  },
  subtitle1: {
    fontSize: 16,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  subtitle2: {
    fontSize: 16,
    marginHorizontal: 10,
    textAlign: 'center',
    marginBottom: 50,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  pickerWrapper: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  pickerLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  picker: {
    width: '100%',
    height: 50,
    fontSize: 18, // Adjust this to fit the picker width
  },
  ageText: {
    marginTop: 140,
    fontSize: 18,
    fontWeight: 'bold',
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

export default BirthdayScreen;

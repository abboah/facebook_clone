import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { router } from 'expo-router';
const image = require("../../../assets/images/Illustrationcreate.png")

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const JoinFacebookScreen: React.FC<Props> = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Image source={image}/>
      <Text style={styles.title}>Join Flink</Text>
      <Text style={styles.subtitle1}>We'll help you</Text>
      <Text style={styles.subtitle2}>create a new account in a few easy steps.</Text>

      <TouchableOpacity style={styles.button} onPress={()=> {router.push("/screens/CreateAccount/NameScreen")}}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => { /* Navigate to login screen */ }}>Already have an account?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 60
  },
  subtitle1: {
    fontSize: 16, 
    marginHorizontal: 120,
    textAlign: 'center'
  },
  subtitle2: {
    fontSize: 16, 
    marginHorizontal: 10,
    textAlign: 'center',
    marginBottom: 50
  },
  link: {
    marginTop: 20,
    color: 'blue',
    
  },
  button: {
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

export default JoinFacebookScreen;
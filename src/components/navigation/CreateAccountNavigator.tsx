// src/navigation/CreateAccountNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import JoinFacebookScreen from '../screens/CreateAccount/JoinFacebookScreen';
import NameScreen from '../screens/CreateAccount/NameScreen';
import BirthdayScreen from '../screens/CreateAccount/BirthdayScreen';
import GenderScreen from '../screens/CreateAccount/GenderScreen';
import MobileNumberScreen from '../screens/CreateAccount/MobileNumberScreen';
import PasswordScreen from '../screens/CreateAccount/PasswordScreen';
import TermsPrivacyScreen from '../screens/CreateAccount/TermsPrivacyScreen';
import { NavigationContainer } from '@react-navigation/native';
import Index from '../../../app/index';

const Stack = createStackNavigator();

const CreateAccountNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="JoinFacebook">
    <Stack.Screen name="Home" component={Index} />
      <Stack.Screen name="JoinFacebook" component={JoinFacebookScreen} />
      <Stack.Screen name="Name" component={NameScreen} />
      <Stack.Screen name="Birthday" component={BirthdayScreen} />
      <Stack.Screen name="Gender" component={GenderScreen} />
      <Stack.Screen name="MobileNumber" component={MobileNumberScreen} />
      <Stack.Screen name="Password" component={PasswordScreen} />
      <Stack.Screen name="TermsPrivacy" component={TermsPrivacyScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CreateAccountNavigator;

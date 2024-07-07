// app/index.tsx
import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { getApps } from 'firebase/app'; // Import getApps to check initialization
import '../firebaseConfig'; // Ensure this import is correct to initialize Firebase
import { useNavigation } from '@react-navigation/native';
import { Link } from "expo-router";

export default function Index() {
  const navigation = useNavigation();
  const [initMessage, setInitMessage] = useState('Initializing Firebase...');

  useEffect(() => {
    const checkFirebaseInit = () => {
      try {
        if (getApps().length > 0) {
          setInitMessage('Firebase initialized successfully');
        } else {
          setInitMessage('Failed to initialize Firebase');
        }
      } catch (error: unknown) {
        console.error('Firebase initialization error:', error);
        if (error instanceof Error) {
          setInitMessage(`Error initializing Firebase: ${error.message}`);
        } else {
          setInitMessage('An unknown error occurred');
        }
      }
    };

    checkFirebaseInit();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}
    >
      <Text>Welcome to this project</Text>
      <Text>{initMessage}</Text>
      <Link href="/screens/CreateAccount/JoinFacebookScreen">JoinFacebook</Link>
    </View>
  );
}

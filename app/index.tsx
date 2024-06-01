// app/index.tsx
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { getApps } from 'firebase/app'; // Import getApps to check initialization
import '../firebaseConfig'; // Ensure this import is correct to initialize Firebase

export default function Index() {
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
      }}
    >
      <Text>Welcome to this project</Text>
      <Text>{initMessage}</Text>
    </View>
  );
}

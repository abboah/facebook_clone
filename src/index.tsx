
// src/index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CreateAccountNavigator from './components/navigation/CreateAccountNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <CreateAccountNavigator />
    </NavigationContainer>
  );
};

export default App;

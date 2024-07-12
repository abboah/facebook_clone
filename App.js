import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import SearchByEmailScreen from "./src/screens/SearchByEmailScreen";
import OTPVerificationScreen from "./src/screens/OTPVerificationScreen";
import PasswordResetScreen from "./src/screens/PasswordResetScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ChatScreen from "./src/screens/ChatScreen";
import NewMessageScreen from "./src/screens/NewMessageScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   // <ChatScreen/>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Chat">
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={{ headerShown: false }}
      />
      <Stack.Screen
      name="New Message"
      component={NewMessageScreen}
      />

    </Stack.Navigator>
    
    </NavigationContainer>
   // <HomeScreen />
    /* <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            title: "Find Your Account",
            headerTitleStyle: { fontSize: 15 },
          }}
        />
        <Stack.Screen
          name="SearchByEmail"
          component={SearchByEmailScreen}
          options={{
            title: "Find Your Account",
            headerTitleStyle: { fontSize: 15 },
          }}
        />
        <Stack.Screen
          name="OTPVerification"
          component={OTPVerificationScreen}
          options={{
            title: "Find Your Account",
            headerTitleStyle: { fontSize: 15 },
          }}
        />
        <Stack.Screen
          name="PasswordReset"
          component={PasswordResetScreen}
          options={{
            title: "Reset Your Password",
            headerTitleStyle: { fontSize: 15 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    */
  );
}

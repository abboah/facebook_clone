import { Stack } from "expo-router";
import React from "react";
import JoinFacebookScreen from "./screens/CreateAccount/JoinFacebookScreen";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      
    </Stack>
  );
}

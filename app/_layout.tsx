import { Stack } from "expo-router";
import React from "react";
import JoinFacebookScreen from "../src/components/screens/CreateAccount/JoinFacebookScreen";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}

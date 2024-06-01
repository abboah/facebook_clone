// PhoneAuthComponent.js
import React, { useState, useRef } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { sendVerificationCode, verifyCode } from './authService';
import firebase from 'firebase/app';

const PhoneAuthComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  const recaptchaVerifier = useRef(null);

  const handleSendCode = async () => {
    const result = await sendVerificationCode(phoneNumber, recaptchaVerifier.current);
    setConfirmationResult(result);
  };

  const handleVerifyCode = async () => {
    if (confirmationResult) {
      await verifyCode(confirmationResult, verificationCode);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Send Verification Code" onPress={handleSendCode} />

      <TextInput
        placeholder="Verification Code"
        value={verificationCode}
        onChangeText={setVerificationCode}
      />
      <Button title="Verify Code" onPress={handleVerifyCode} />

      <View>
        <Text>reCAPTCHA Placeholder</Text>
        <firebase.auth.RecaptchaVerifier
          ref={recaptchaVerifier}
          size="invisible"
          android
          ios
        />
      </View>
    </View>
  );
};

export default PhoneAuthComponent;

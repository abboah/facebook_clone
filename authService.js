// authService.js
import { firebase } from './firebaseConfig';

export const signUp = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.error('Error signing up:', error);
  }
};

export const signIn = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error('Error signing in:', error);
  }
};

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.error('Error signing out:', error);
  }
};

export const sendVerificationCode = async (phoneNumber, recaptchaVerifier) => {
  try {
    const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier);
    return confirmationResult;
  } catch (error) {
    console.error('Error sending verification code:', error);
  }
};

export const verifyCode = async (confirmationResult, code) => {
  try {
    await confirmationResult.confirm(code);
  } catch (error) {
    console.error('Error verifying code:', error);
  }
};

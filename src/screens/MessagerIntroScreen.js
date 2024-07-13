// MessagePage.js
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { AntDesign, Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const MessagerIntroScreen = ({ route, navigation  }) => {
  const { user, userProfile, time, message } = route.params;

  const handleBackPress = () => {
    // Handle back button press
    navigation.navigate("ChatPage")
  };

  const handleVideoCallPress = () => {
    // Handle video call button press
    Alert.alert('Video call pressed');
  };

  const handleCallPress = () => {
    // Handle call button press
    Alert.alert('Call pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <AntDesign name="left" size={24} color="#FE6B35" />
        </TouchableOpacity>
        <Image source={userProfile} style={styles.profilePic} />
        <View style={styles.headerText}>
          <Text style={styles.userName}>{user}</Text>
          <Text style={styles.status}>Messenger</Text>
        </View>
        <TouchableOpacity onPress={handleCallPress} style={styles.phoneIcon}>
        <FontAwesome5 name="phone-alt" size={17} color="#FE6B35" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleVideoCallPress}>
        <FontAwesome5 name="video" size={21} color="#FE6B35" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.messageContainer}>
        <View style={styles.intro}>
          <Image source={userProfile} style={styles.introProfilePic} />
          <Text style={styles.introUserName}>{user}</Text>
          <Text style={styles.introText}>You're friends on Facebook</Text>
          <Image source={userProfile} style={styles.introProfilePicSmall} />
          <Text style={styles.introText}>Say hi to your new Facebook friend, {user}.</Text>
        </View>

        <View style={styles.message}>
          <Image source={userProfile} style={styles.messageProfilePic} />
          <View style={styles.messageContent}>
            <Text style={styles.messageText}>{message}</Text>
          </View>
          <Text style={styles.messageTime}>{time}</Text>
          <FontAwesome5 name="check-circle" size={16} color="blue" style={styles.messageStatusIcon} />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <AntDesign name="pluscircle" size={32} color="#FE6B35" />
        <FontAwesome5 name="camera" size={32} color="#FE6B35" />
        <FontAwesome5 name="image" size={32} color="#FE6B35" />
        <FontAwesome5 name="microphone" size={32} color="#FE6B35" />

        <TextInput style={styles.input} placeholder="Aa" />
        <AntDesign name="like1" size={32} color="#FE6B35" />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  phoneIcon: {
    marginRight: 20,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    color: 'gray',
  },
  messageContainer: {
    flex: 1,
    padding: 10,
  },
  intro: {
    alignItems: 'center',
    marginVertical: 20,
  },
  introProfilePic: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  introProfilePicSmall: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginVertical: 10,
  },
  introUserName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  introText: {
    color: 'gray',
    textAlign: 'center',
  },
  message: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  messageProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  messageContent: {
    flex: 1,
    marginLeft: 10,
  },
  messageText: {
    fontSize: 16,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
  },
  messageTime: {
    color: 'gray',
    marginLeft: 10,
  },
  messageStatusIcon: {
    marginLeft: 5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'space-evenly',
    justifyContent: 'space-evenly',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    //flex: 1,
    width: 135,
    height: 35,
    paddingHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
  },
});

export default MessagerIntroScreen;

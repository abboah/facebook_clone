import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ScrollView, FlatList } from 'react-native';
import { AntDesign, Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";


const ChatScreen = () => {
    const navigation = useNavigation();
  const messages = [
    // Sample data
    { id: '1', user: 'Felix Amofah', message: 'Hello, how are you?', time: '2:15 PM', read: false, UserProfile: require('../../assets/felix.png')},
    { id: '2', user: 'Jane Smith', message: 'You: I am fine', time: '5:00 AM', read: true, UserProfile: require('../../assets/jane.png') },
    { id: '3', user: 'Kendrick Akowuah', message: 'You: I am fine', time: '5:00 AM', read: false, UserProfile: require('../../assets/kendrick.png')},

    // Add more sample messages
  ];

  const handleCameraPress = () => {
    // Handle opening the camera
    Alert.alert('Camera pressed');
  };

  const handleNotePress = () => {
    Alert.alert('Note pressed');
  };
  const handleSearchBar = () => {
    navigation.navigate("New Message");
  };

  const handleUnreadPress = () => {
    Alert.alert('Unread pressed');
  };

  const handleVideoCallPress = () => {
    Alert.alert('Create Video Call pressed');
  };

  const renderMessageItem = ({ item }) => (
    <View style={styles.messageItem}>
      <Image source={item.UserProfile} style={styles.profilePic} />
      <View style={styles.messageText}>
        <Text style={styles.userName}>{item.user}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
      <FontAwesome5 name="check-circle" size={24} color={item.read ? 'gray' : '#1C78FF' }/>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* First Division */}
      <View style={styles.firstDivision}>
        {/* First Section */}
        <View style={styles.topBar}>
          <Image source={require('../../assets/profile_placeholder.png')} style={styles.profilePic} />
          <Text style={styles.topBarText}>Chats</Text>
          <View style={styles.topBarIcons}>
            <TouchableOpacity onPress={handleCameraPress} style = {styles.cameraIcon}>
            <FontAwesome5 name="camera" size={24} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNotePress} style = {styles.noteIcon}>
            <FontAwesome5 name="pen-square" size={24} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Second Section */}
        <View style={styles.searchBarContainer}>
            <TouchableOpacity style={styles.searchBar} onPress={handleSearchBar}>
                <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.unreadButton} onPress={handleUnreadPress}>
            <Text style={styles.unreadButtonText}>Unread</Text>
          </TouchableOpacity>
        </View>
        {/* Third Section */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.activeFriendsBar}>
            <View style = {styles.createVideobox}>
          <TouchableOpacity style={styles.videoCallButton} onPress={handleVideoCallPress}>
          <FontAwesome5 name="video" size={24} color="#1C78FF" />
          </TouchableOpacity>
          <Text style={styles.videoCallText}>Create Video Call</Text>
          </View>
          {/* Sample active friend */}
          <View style={styles.activeFriend}>
            <Image source={require('../../assets/UserPicture.png')} style={styles.activeFriendPic} />
            <Text style={styles.activeFriendName}>Friend 1</Text>
          </View>
          <View style={styles.activeFriend}>
            <Image source={require('../../assets/UserPicture.png')} style={styles.activeFriendPic} />
            <Text style={styles.activeFriendName}>Friend 2</Text>
          </View>
          {/* Add more active friends */}
        </ScrollView>
      </View>
      {/* Second Division */}
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        style={styles.messagesContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
    },
    firstDivision: {
      marginBottom: 10,
    },
    topBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    profilePic: {
      width: 50,
      height: 50,
      borderRadius: 10,
    },
    topBarText: {
      fontWeight: "bold",
      fontSize: 30,
      marginLeft: -160,
    },
    topBarIcons: {
      flexDirection: 'row',
    },
    cameraIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        marginRight: 5,
        backgroundColor: "#DDDDDD",
        borderRadius: 10,
    },
    noteIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        backgroundColor: "#DDDDDD",
        borderRadius: 10,
    },
    searchBarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    searchBar: {
      flex: 6,
      alignItems: 'flex-start',
      justifyContent:'center',
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      fontFamily: 'Outfit_400Regular',
      backgroundColor: "#EEEEEE",
      width: 276,
      height: 34,
        },
        searchText:{
         color:'#555555',
        },
    unreadButton: {
      flex: 2,
      marginLeft: 42,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 10,
      //paddingHorizontal: 10,
      //paddingVertical: 5,
      backgroundColor: "#DDDDDD",
      width: 70,
      height: 34,
    },
    unreadButtonText: {
      fontFamily: 'Outfit_400Regular',
      color: '#555555',   
     },
    activeFriendsBar: {
      paddingVertical: 10,
      marginVertical: 20,
    //borderBottomWidth: 1,
  //  borderTopWidth: 1,
      borderColor: 'blue',
    },
    createVideobox:{
     width: 75,
     flexDirection: 'column',
    // maxWidth: 70,
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 10,
    },
    videoCallButton: {
      justifyContent: 'center',
      borderRadius: 10,
      alignItems: 'center',
      marginRight: 20,
      backgroundColor: '#EEEEEE',
      width: 50,
      height: 50,
    },
    videoCallText: {
        fontSize: 10,
        lineHeight: 12,
      fontFamily: 'Outfit_400Regular',
     // textAlignVertical: 'bottom',
    },
    activeFriend: {
      alignItems: 'center',
      marginRight: 10,
      maxWidth: 75,
    },
    activeFriendPic: {
      width: 50,
      height: 50,
      borderRadius: 10,
    },
    activeFriendName: {
        fontSize: 10,
        lineHeight: 12,
        fontWeight: '400',
      fontFamily: 'Outfit_400Regular',
    },
    messagesContainer: {
    //  marginTop: 5,
    },
    messageItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5,
      borderColor: '#1C78FF',
     // marginBottom: 10,
    },
    messageText: {
      flex: 1,
      marginLeft: 10,
    },
    userName: {
      fontFamily: 'Outfit_700Bold',
    },
    message: {
      fontFamily: 'Outfit_400Regular',
      color: '#888',
    },
    time: {
      fontFamily: 'Outfit_400Regular',
      color: '#888',
      marginRight: 10,
    },
});

export default ChatScreen;

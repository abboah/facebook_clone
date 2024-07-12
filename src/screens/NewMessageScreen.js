import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome5, FontAwesome, AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
  { id: '1', name: 'Rocky Parker', image: 'https://via.placeholder.com/50' },
  { id: '2', name: 'Kiran Pawar', image: 'https://via.placeholder.com/50' },
  { id: '3', name: 'Maisy Hupheri', image: 'https://via.placeholder.com/50' },
  { id: '4', name: 'Anandi Kande', image: 'https://via.placeholder.com/50' },
  { id: '5', name: 'Karen Castillo', image: 'https://via.placeholder.com/50' },
];

const NewMessageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.inputContainer}>
        <Text style={styles.toText}>To:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type a name or group"
        />
        <TouchableOpacity style={styles.lockIcon}>
          <FontAwesome name="lock" size={20} color="purple" />
        </TouchableOpacity>
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
        <FontAwesome5 name="user-friends" size={24} color="#FE6B35" />
          <Text style={styles.actionText}>Create a new group</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
        <FontAwesome5 name="video" size={24} color="#FE6B35" />
        <Text style={styles.actionText}>Create a new video call</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={styles.suggestedText}>Suggested</Text>
        {data.map((item) => (
          <View key={item.id} style={styles.suggestedItem}>
            <Image source={{ uri: item.image }} style={styles.profileImage} />
            <Text style={styles.nameText}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  toText: {
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    marginLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  
  lockIcon: {
    marginLeft: 10,
  },
  actionButtons: {
    borderBottomWidth: 1,
    borderColor: '#AAAAAA',
    padding: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    bordercolor: 'blue',
  },
  actionText: {
    marginLeft: 10,
    color: '#FE6B35',
    fontWeight: '500',
  },
  suggestedText: {
    fontSize: 12,
   fontWeight: '400',
    paddingHorizontal: 10,
    marginTop: 10,
    opacity: 0.5,
  },
  suggestedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nameText: {
    fontSize: 16,
  },
});
export default NewMessageScreen;

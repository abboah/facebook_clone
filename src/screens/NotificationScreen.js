import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const notifications = [
  {
    id: "1",
    name: "Darrell Trivedi",
    profilePicture: "https://via.placeholder.com/50",
    time: "2 hours ago",
    message: "has a new story up. What's your reaction?",
  },
  {
    id: "2",
    name: "Darrell Trivedi",
    profilePicture: "https://via.placeholder.com/50",
    time: "2 hours ago",
    message: "has a new story up. What's your reaction?",
  },
  {
    id: "3",
    name: "Darrell Trivedi",
    profilePicture: "https://via.placeholder.com/50",
    time: "2 hours ago",
    message: "has a new story up. What's your reaction?",
  },
  {
    id: "4",
    name: "Darrell Trivedi",
    profilePicture: "https://via.placeholder.com/50",
    time: "2 hours ago",
    message: "has a new story up. What's your reaction?",
  },
  {
    id: "5",
    name: "Darrell Trivedi",
    profilePicture: "https://via.placeholder.com/50",
    time: "2 hours ago",
    message: "has a new story up. What's your reaction?",
  },
  {
    id: "6",
    name: "Darrell Trivedi",
    profilePicture: "https://via.placeholder.com/50",
    time: "2 hours ago",
    message: "has a new story up. What's your reaction?",
  },
  {
    id: "7",
    name: "Darrell Trivedi",
    profilePicture: "https://via.placeholder.com/50",
    time: "2 hours ago",
    message: "has a new story up. What's your reaction?",
  },
  {
    id: "8",
    name: "Darrell Trivedi",
    profilePicture: "https://via.placeholder.com/50",
    time: "2 hours ago",
    message: "has a new story up. What's your reaction?",
  },
 
 
  
  
  // Add more notifications as needed...
];

const NotificationItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={styles.notificationItem}
      onPress={() => Alert.alert("Notification", item.message)}
    >
      <Image
        source={{ uri: item.profilePicture }}
        style={styles.profilePicture}
      />
      <View style={styles.notificationText}>
        <Text style={styles.notificationName}>
          {item.name}{" "}
          <Text style={styles.notificationMessage}>{item.message}</Text>
        </Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
      <Text style={styles.moreOptions}>•••</Text>
    </TouchableOpacity>
  );
};

const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <ScrollView style={styles.messageContainer}>        
        <View style={styles.content1}>
          <FlatList
            data={notifications}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <NotificationItem item={item} />}
            ListHeaderComponent={() => (
              <View>
                <Text style={styles.sectionHeader}>New</Text>
              </View>
            )}
          />
          </View>
          <View style={styles.content2}>
          <Text style={styles.sectionHeader1}>Earlier</Text>
          <FlatList
            data={notifications}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <NotificationItem item={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content1: {
    flex: 1,
    marginTop: 10,
    marginBottom: 1,
    backgroundColor: "#ccccff",   

  },
  content2: {
    flex: 1,
    backgroundColor: "#ccccff",   

  },
  messageContainer: {
    flex: 1,
  },

  header: {
    fontSize: 24,
    marginTop: 3,
    marginLeft: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    
    marginHorizontal: 16,
  },
  sectionHeader1: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 16,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 70,
    padding: 10,
    //marginVertical: 0.5,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 16,
  },
  notificationText: {
    flex: 1,
  },
  notificationName: {
    fontWeight: "bold",
    fontSize: 12,
  },
  notificationMessage: {
    fontWeight: "400",

    fontSize: 12,
  },
  notificationTime: {
    fontSize: 14,
    color: "#777",
  },
  moreOptions: {
    fontSize: 24,
    color: "#777",
  },
});

export default NotificationScreen;

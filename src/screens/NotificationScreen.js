import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
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
      <Text style={styles.sectionHeader1}>Earlier</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 16,
    backgroundColor: "#ccccff",
  },
  header: {
    fontSize: 24,
    // fontFamily: 'Outfit-Bold',
    marginTop: 3,
    marginLeft: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    // fontFamily: 'Outfit-Bold',
    // marginTop: 16,
    // marginBottom: 8,
    marginHorizontal: 16,
  },
  sectionHeader1: {
    fontSize: 20,
    fontWeight: 'bold',
    // fontFamily: 'Outfit-Bold',
    marginTop: -170,
    // marginBottom: 8,
    marginHorizontal: 16,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 70,
    padding: 10,
    //backgroundColor: '#f0f0f0',
    // borderRadius: 8,
    marginTop: 0.5,
   // backgroundColor: "#ccccff",
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
    //fontFamily: 'Outfit-Bold',
    fontSize: 12,
  },
  notificationMessage: {
    fontWeight: "400",

    // fontFamily: 'Outfit-Regular',
    fontSize: 12,
  },
  notificationTime: {
    // fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: "#777",
  },
  moreOptions: {
    fontSize: 24,
    color: "#777",
  },
});

export default NotificationScreen;

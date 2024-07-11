import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = () => {
  const [posts, setPosts] = useState([
    {
      id: "1",
      name: "Felix Amofah",
      time: "2 hrs ago",
      caption: "Enjoying the sunny day!",
      postImage: "https://via.placeholder.com/300",
      profileImage: "https://via.placeholder.com/50",
      liked: false,
    },
    {
      id: "2",
      name: "Benjamin Akusaki",
      time: "3 hrs ago",
      caption: "Feeling the pressure",
      postImage: "https://via.placeholder.com/300",
      profileImage: "https://via.placeholder.com/50",
      liked: false,
    },
    {
      id: "3",
      name: "Abboah Festus",
      time: "5 days ago",
      caption: "LET'S GET STARTED!",
      postImage: "https://via.placeholder.com/300",
      profileImage: "https://via.placeholder.com/50",
      liked: false,
    },
    // Add more post objects here
  ]);

  const renderPost = ({ item }) => (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Image
          source={{ uri: item.profileImage }}
          style={styles.postProfileImage}
        />
        <View style={styles.postInfo}>
          <Text style={styles.postName}>{item.name}</Text>
          <Text style={styles.postTime}>{item.time}</Text>
        </View>
      </View>
      <Text style={styles.postCaption}>{item.caption}</Text>
      {item.postImage && (
        <Image source={{ uri: item.postImage }} style={styles.postImage} />
      )}
      <View style={styles.postActions}>
        <TouchableOpacity onPress={() => toggleLike(item.id)}>
          <AntDesign
            name="like2"
            size={24}
            color={item.liked ? "red" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="comment-o" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="facebook-messenger" size={24} color="#000000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const toggleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, liked: !post.liked } : post
      )
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Section 1 */}
      <SafeAreaView>
        <View style={styles.section1}>
          <View style={styles.header}>
            <Image source={require("../../assets/Flink.png")} />
            <TouchableOpacity>
              <FontAwesome5 name="facebook-messenger" size={24} color="blue" />
            </TouchableOpacity>
          </View>

          <View style={styles.iconBar}>
            <TouchableOpacity>
              <AntDesign name="home" size={28} color="orange" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="person-add" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="team" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="live-tv" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="notifications" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="menu" size={28} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.statusBar}>
            <Image
              source={{ uri: "https://via.placeholder.com/50" }}
              style={styles.profileImage}
            />

            <TouchableOpacity style={styles.statusInput}>
              <Text style={styles.title1}>What's on your mind?</Text>
              <Image
                source={require("../../assets/Group.jpg")}
                style={styles.grouppic}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchicon}>
              <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.iconBar}>
            <TouchableOpacity>
              <Image source={require("../../assets/ReelsGG.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../../assets/RoomGG.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../../assets/GroupGG.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../../assets/LiveGG.png")} />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal style={styles.storiesBar}>
            <View style={styles.story}>
              <Image
                source={{ uri: "https://via.placeholder.com/100" }}
                style={styles.storyImage}
              />
              <TouchableOpacity style={styles.storyAddButton}>
                <AntDesign name="pluscircle" size={24} color="blue" />
              </TouchableOpacity>
            </View>
            <View style={styles.story}>
              <Image
                source={{ uri: "https://via.placeholder.com/100" }}
                style={styles.storyImage}
              />
              <TouchableOpacity style={styles.storyUserProfile}>
                <AntDesign name="picture" size={24} color="#FE6B35" />
              </TouchableOpacity>
              <Text style={styles.storyName}>User name</Text>
            </View>
            <View style={styles.story}>
              <Image
                source={{ uri: "https://via.placeholder.com/100" }}
                style={styles.storyImage}
              />
              <TouchableOpacity style={styles.storyUserProfile}>
                <AntDesign name="picture" size={24} color="#FE6B35" />
              </TouchableOpacity>
              <Text style={styles.storyName}>User name</Text>
            </View>
            <View style={styles.story}>
              <Image
                source={{ uri: "https://via.placeholder.com/100" }}
                style={styles.storyImage}
              />
              <TouchableOpacity style={styles.storyUserProfile}>
                <AntDesign name="picture" size={24} color="#FE6B35" />
              </TouchableOpacity>
              <Text style={styles.storyName}>User name</Text>
            </View>
            {/* Add more story items here */}
          </ScrollView>
        </View>

        {/* Section 2 */}
        <View style={styles.section2}>
          <FlatList
            data={posts}
            renderItem={renderPost}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section1: {
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  iconBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  statusBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  statusInput: {
    backgroundColor: "#EEEEEE",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",

    width: 230,
    height: 34,
    // borderBottomWidth: 1,
    //borderBottomColor: '#ccc',
    //marginHorizontal: -5,
    fontSize: 16,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 10,
  },
  title1: {
    opacity: 0.2,
  },
  grouppic: {
    width: 13,
    height: 12,
  },
  searchicon: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  storiesBar: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  story: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  storyImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  storyAddButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  storyUserProfile: {
    position: "absolute",
    bottom: 10,
    right: 40,
  },
  storyName: {
    marginTop: 5,
    textAlign: "center",
  },
  section2: {
    flex: 1,
  },
  post: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  postProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  postInfo: {
    marginLeft: 10,
  },
  postName: {
    fontWeight: "bold",
  },
  postTime: {
    color: "#888",
  },
  postCaption: {
    marginVertical: 10,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  postActions: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default HomeScreen;

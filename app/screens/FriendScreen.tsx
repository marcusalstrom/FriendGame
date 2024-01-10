import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Padding, Color, FontSize, FontFamily } from "../../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const FriendScreen = () => {
  const friends = [
    { name: "Jacob", id: "1" },
    { name: "Kabbe", id: "2" },
    { name: "Olli", id: "3" },
    { name: "Jacob", id: "4" },
    { name: "Kabbe", id: "5" },
    { name: "Olli", id: "6" },
    { name: "Jacob", id: "7" },
    { name: "Kabbe", id: "8" },
    { name: "Olli", id: "9" },
    // Add more friends here...
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.bG }}>
      <View style={[styles.header]}>
        <Text style={styles.headerText}>Friends</Text>
      </View>

      <View style={styles.friendsContainer}>
        <FlatList
          data={friends}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.friendContainer}>
              <FontAwesome5 name="user-friends" size={40} color="white" />
              <Text style={styles.friendName}>{item.name}</Text>
              <Text
                style={{
                  left: "80%",
                  position: "absolute",
                  top: "70%",
                  color: Color.colorWhite,
                }}
              >
                Your turn
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  FriendScreen: {
    flex: 1,
    backgroundColor: Color.bG,
    alignItems: "center",
    justifyContent: "center",
  },
  friendsContainer: {
    backgroundColor: Color.bG,
    padding: 20,
    height: 600,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  friendContainer: {
    backgroundColor: Color.bG,
    borderColor: Color.colorCrimson,
    borderStyle: "solid",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    height: 100,
    marginVertical: 8,
  },
  friendName: {
    fontFamily: FontFamily.bowlbyOneSCRegular,
    color: Color.colorWhite,
    fontSize: 16,
    marginHorizontal: 10,
  },
  headerText: {
    fontFamily: FontFamily.bowlbyOneSCRegular,
    color: Color.colorWhite,
    fontSize: 20,
    marginHorizontal: 10,
  },
  header: {
    marginBottom: 20,
    overflow: "hidden",
    alignItems: "center",
  },
});
export default FriendScreen;

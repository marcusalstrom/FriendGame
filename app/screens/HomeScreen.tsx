import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Background from "../components/background";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate("Question");
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text> The Friend Game</Text>
        <Button title="Press me" onPress={handleButtonPress} />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default HomeScreen;

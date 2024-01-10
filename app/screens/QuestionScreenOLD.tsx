import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/background";
import { useNavigation } from "@react-navigation/native";

const QuestionScreen = () => {
  const [score, setScore] = useState(0);
  const navigation = useNavigation();

  const handleButtonPress = () => {
    setScore(score + 1);
  };

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.playerInfo}>
          <Text style={styles.playerText}>Playing against: Player 2</Text>
          <Text style={styles.scoreText}>Score: {score}</Text>
        </View>
        <View style={styles.q_container}>
          <Text style={styles.q_text}>
            Question .................... placeholder?
          </Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Text style={styles.buttonText}>Answer 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Answer 2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Answer 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Answer 4</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  q_container: {
    backgroundColor: "rgba(0,0,0,0.8)",
    width: "95%",
    borderRadius: 10,
    padding: 2,
  },
  buttonText: {
    color: "#fff", // white text
    fontSize: 16,
    textAlign: "center", // center the text
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  q_text: {
    fontSize: 20,
    padding: 10,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    flex: 1,
    height: 70,
    width: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: "#fc5c65",
    justifyContent: "center",
  },
  playerInfo: {
    marginBottom: 20,
  },
  playerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  scoreText: {
    fontSize: 16,
    color: "#ddd",
  },
});

export default QuestionScreen;

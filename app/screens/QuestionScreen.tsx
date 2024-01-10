import React, { useCallback } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { FontAwesome5 } from "@expo/vector-icons";
import { Padding, Color, FontSize, FontFamily } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const QuestionScreen = () => {
  const onFrameButtonClick = useCallback((): void => {
    Alert.alert("Test", "Test");
  }, []);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.bG }}>
      <View style={styles.QuestionScreen}>
        <View style={[styles.header]}>
          <Text style={styles.friendQuiz}>Friend Game</Text>
        </View>
        <FontAwesome5.Button
          name="user-friends"
          size={24}
          color="black"
          onPress={() => navigation.navigate("FriendScreen")}
        />
        <View style={[styles.questionWrapper]}>
          <Text
            style={[styles.QuestionTypo]}
            adjustsFontSizeToFit={true}
            numberOfLines={10}
          >
            What is Jacobs favorite Color?
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.answerContainer]}
          activeOpacity={0.2}
          onPress={onFrameButtonClick}
        >
          <Text style={[styles.answer1Typo]}>Blue</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.answerContainer]}>
          <Text style={[styles.answer1Typo]}>Yellow</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.answerContainer]}>
          <Text style={[styles.answer1Typo]}>Green</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.answerContainer]}>
          <Text style={[styles.answer1Typo]}>Red</Text>
        </TouchableOpacity>

        {/* <View style={[styles.frame1, styles.frameFlexBox]}>
        <LinearProgress
          style={styles.frameItem}
          animation={false}
          value={1}
          variant="determinate"
          color="#6750a4"
          trackColor="#d9d9d9"
        />
      </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  answerContainer: {
    // flex: 1,
    borderWidth: 1,
    width: "90%",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_16xl,
    borderColor: Color.colorCrimson,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_100,
    marginBottom: 10,
  },

  QuestionTypo: {
    width: 251,
    flex: 1,
    fontSize: FontSize.size_9xl,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.bowlbyOneSCRegular,
    letterSpacing: 0,
  },
  answer1Typo: {
    width: 251,
    fontSize: FontSize.size_9xl,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.bowlbyOneSCRegular,
    letterSpacing: 0,
  },

  questionWrapper: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
  },
  friendQuiz: {
    fontSize: 20,
    color: Color.colorWhite,
    fontFamily: FontFamily.bowlbyOneSCRegular,
    letterSpacing: 0,
  },
  header: {
    marginBottom: 200,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorCrimson,
    alignItems: "center",
  },
  QuestionScreen: {
    backgroundColor: Color.bG,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default QuestionScreen;

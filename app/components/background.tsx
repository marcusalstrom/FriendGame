import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => (
  <ImageBackground
    style={styles.background}
    source={require("../assets/background.png")}
  >
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default Background;

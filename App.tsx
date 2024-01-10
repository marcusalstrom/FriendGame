const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoginScreen from "./app/screens/LoginScreen";
import AgentsPage from "./app/screens/QuestionScreen";
import QuestionScreen from "./app/screens/QuestionScreen";
import HomeScreen from "./app/screens/HomeScreen";
import FriendScreen from "./app/screens/FriendScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "BowlbyOneSC-Regular": require("./app/assets/fonts/BowlbyOneSC-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator
          initialRouteName="LoginPage"
          screenOptions={{ headerShown: true }}
        >
          <Stack.Screen
            name="QuestionScreen"
            component={QuestionScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="LoginPage"
            component={LoginScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="FriendScreen"
            component={FriendScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};
export default App;

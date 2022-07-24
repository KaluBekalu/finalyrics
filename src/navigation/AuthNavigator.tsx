import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";
import routes from "../constants/routes";
import Login from "../screens/AuthScreens/LoginScreen";
import Register from "../screens/AuthScreens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          ...TransitionPresets.SlideFromRightIOS,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name={routes.welcome} component={WelcomeScreen} />
        <Stack.Screen name={routes.login} component={Login} />
        <Stack.Screen name={routes.register} component={Register} />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});

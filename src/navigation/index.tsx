import React from "react";
import { StyleSheet } from "react-native";

import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";
import routes from "../constants/routes";

const Stack = createStackNavigator();


const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name={routes.authNav} component={AuthNavigator} />
        <Stack.Screen name={routes.appaNav} component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});

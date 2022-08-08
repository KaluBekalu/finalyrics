import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import * as React from "react";
import { Image } from "react-native";

import routes from "../constants/routes";
import Home from "../screens/HomeScreens";
import { View, Text } from "react-native";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import client from '../global/graphql/graphqlClient'
import { ApolloProvider } from '@apollo/client'

import Tracks from "../screens/HomeScreens/Tracks";
import Lyric from "../screens/HomeScreens/Lyric";
import useAuth from "../auth/useAuth";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AuthContext from "../auth/context";

const Stack = createStackNavigator();

const transitionSpec = {
  open: {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  },
  close: {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  },
};

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const auth = useAuth();
  const { user } = React.useContext(AuthContext);

  const handleLogout = () => {
    auth.logOut();
  };

  return (
    <>
      <ApolloProvider client={client}>

        <Drawer.Navigator
          useLegacyImplementation={true}
          screenOptions={{ headerShown: false }}
          drawerContent={(props) => (
            <View style={{ paddingVertical: 25 }}>
              <View
                style={{
                  alignItems: "center",
                  elevation: 5,
                  width: "90%",
                  shadowColor: "#00000090",
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  alignSelf: "center",
                  paddingTop: 15,
                  paddingBottom: 5,
                }}
              >
                <Image
                  source={require("../assets/images/avatar.png")}
                  style={{ width: 180, height: 180, borderRadius: 180 }}
                />
                <View style={{ marginBottom: 5, alignItems: "center" }}>
                  <Text style={{ fontSize: 30 }}>
                    {user["https://hasura.io/jwt/claims"].firstname}{" "}
                    {user["https://hasura.io/jwt/claims"].lastname.substring(
                      0,
                      1
                    )}
                    .
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "300" }}>
                    {user["https://hasura.io/jwt/claims"].username}{" "}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "90%",
                  backgroundColor: Colors.white,
                  borderRadius: 20,
                  alignSelf: "center",
                  paddingVertical: 15,
                  paddingBottom: 25,
                  marginTop: 20,
                }}
              >
                <DrawerButton title={"Home"} />
                <DrawerButton title={"Lyrics"} />
                <DrawerButton title={"New Albums"} />
                <DrawerButton title={"Favorites"} />
                <DrawerButton title={"Submit Lyrics"} />
                <DrawerButton title={"Profile"} />
                <DrawerButton title={"About"} />
              </View>
              <TouchableOpacity
                onPress={() => handleLogout()}
                style={{
                  marginTop: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{ fontSize: 25, fontWeight: "300", marginRight: 10 }}
                >
                  Logout{" "}
                </Text>
                <Icon name="logout" size={20} />
              </TouchableOpacity>
            </View>
          )}
        >
          <Drawer.Screen name={routes.home} component={HomeNavigator} />
        </Drawer.Navigator>
      </ApolloProvider>

    </>
  );
}

const DrawerButton = ({ title }) => {
  return (
    <TouchableOpacity
      onPress={() => { }}
      style={{
        alignSelf: "center",
        width: "100%",
        alignItems: "flex-start",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 5,
        shadowColor: "#00000070",
        backgroundColor: Colors.white,
        elevation: 2,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "300" }}>{title}</Text>
    </TouchableOpacity>
  );
};

const HomeNavigator = () => {
  return (
    <>
      <StatusBar hidden={false} />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name={routes.appaNav} component={Home} />
        <Stack.Screen name={routes.tracks} component={Tracks} />
        <Stack.Screen
          options={{
            gestureEnabled: true,
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
          name={routes.lyric}
          component={Lyric}
        />
      </Stack.Navigator>
    </>
  );
};

export default DrawerNavigator;

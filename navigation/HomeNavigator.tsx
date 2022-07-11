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
import Liyric from "../screens/HomeScreens/Liyric";
import { View, Text } from "react-native";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

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
  return (
    <>
      <Drawer.Navigator
        useLegacyImplementation={true}
        screenOptions={{ headerShown: false }}
        // defaultStatus={"open"}
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
              <View style={{ marginBottom: 5 }}>
                <Text style={{ fontSize: 30 }}>Selam B.</Text>
                <Text style={{ fontSize: 18, fontWeight: "300" }}>
                  Lorem Ipsum
                </Text>
              </View>
            </View>
            <View
              style={{
                // elevation: 5,
                width: "90%",
                // shadowColor: "#00000090",
                backgroundColor: Colors.white,
                borderRadius: 20,
                alignSelf: "center",
                paddingVertical: 15,
                // paddingHorizontal: 10,
                paddingBottom: 25,
                marginTop: 20,
                // flex: 1,
              }}
            >
              {/* <DrawerContentScrollView>
              <DrawerItemList {...props} />
            </DrawerContentScrollView> */}
              <DrawerButton title={"Home"} />
              <DrawerButton title={"Lyrics"} />
              <DrawerButton title={"New Albums"} />
              <DrawerButton title={"Favorites"} />
              <DrawerButton title={"Submit Lyrics"} />
              <DrawerButton title={"Profile"} />
              <DrawerButton title={"About"} />
            </View>
            <TouchableOpacity
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
    </>
  );
}

const DrawerButton = ({ title }) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
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
          ...TransitionPresets.ModalSlideFromBottomIOS,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name={routes.appaNav} component={Home} />
        <Stack.Screen name={routes.lyric} component={Liyric} />
      </Stack.Navigator>
    </>
  );
};

export default DrawerNavigator;

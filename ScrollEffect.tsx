import * as React from "react";
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from "react-native";
const { width, height } = Dimensions.get("screen");

const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: Math.random(),
    image: require("./assets/images/avatar.png"),
    name: "Kalkidan Bekalu",
    jobTitle: "Software Engineer",
    email: "KaluBekalu1@gmail.com",
  };
});

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + 3 * SPACING;

const Tutorial = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar hidden />

      <Image
        source={require("./assets/images/frontbg.png")}
        style={StyleSheet.absoluteFillObject}
        blurRadius={15}
      />

      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={{
          padding: SPACING * 2,
          paddingTop: StatusBar.currentHeight || SPACING,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <Animated.View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: SPACING,
                marginBottom: SPACING,
                backgroundColor: "#ffffff",
                elevation: 5,
                borderRadius: 12,
                transform: [{ scale: scale }],
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  marginRight: SPACING / 2,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "black",
                    fontSize: 22,
                    fontWeight: "700",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 18,
                    opacity: 0.7,
                  }}
                >
                  {item.jobTitle}
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    opacity: 0.8,
                  }}
                >
                  {item.email}
                </Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Tutorial;

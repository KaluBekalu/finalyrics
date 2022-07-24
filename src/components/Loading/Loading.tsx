import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import LottieView from "lottie-react-native";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LottieView
        style={{
          height: 100,
        }}
        source={require("../../assets/lotties/loading.json")}
        speed={1.3}
        autoPlay
        loop={true}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});

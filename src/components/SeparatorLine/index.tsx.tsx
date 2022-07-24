import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const SeparatorLine = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.grey,
        width: "100%",
        marginVertical: 5,
        height: 1,
      }}
    />
  );
};

export default SeparatorLine;

const styles = StyleSheet.create({});

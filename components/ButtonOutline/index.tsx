import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Styles from "../../constants/Styles";
import Colors from "../../constants/Colors";

const ButtonOutline = ({ onPress, title }: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.button]}
      onPress={onPress}
    >
      <Text style={[Styles.textR, { fontSize: 25, color: Colors.primary }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonOutline;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
});

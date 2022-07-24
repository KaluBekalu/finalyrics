import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Styles from "../../constants/Styles";
import Colors from "../../constants/Colors";

const Button = ({ onPress, title }: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.button]}
      onPress={onPress}
    >
      <Text style={[Styles.textR, { fontSize: 25 }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: Colors.primary,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
});

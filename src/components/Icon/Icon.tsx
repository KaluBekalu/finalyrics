import { TouchableOpacity } from "react-native";
import React from "react";

const Icon = ({ name, size, color }) => {
  return (
    <>
      <TouchableOpacity>
        <Icon name={name} size={size} color={color} />
      </TouchableOpacity>
    </>
  );
};

export default Icon;

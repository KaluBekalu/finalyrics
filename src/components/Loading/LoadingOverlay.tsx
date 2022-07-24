import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import LottieView from "lottie-react-native";

interface props {
  message: string;
  type: string;
  onPress: any;
}

const Loading = ({ message, type, onPress }: props) => {
  return (
    <>
      {type == "loading" ? (
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            zIndex: 10,
            backgroundColor: "#00000090",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.white,
              width: "40%",
              borderRadius: 10,
              aspectRatio: 1,
            }}
          >
            <LottieView
              style={{
                height: 50,
              }}
              source={require("../../assets/lotties/loading.json")}
              speed={1.3}
              autoPlay
              loop={true}
            />
            <Text style={{ color: Colors.black, marginTop: 10 }}>
              {message}
            </Text>
          </View>
        </View>
      ) : (
        <Pressable
          onPress={onPress}
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            zIndex: 10,
            backgroundColor: "#00000090",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.white,
              width: "40%",
              borderRadius: 10,
              aspectRatio: 1,
            }}
          >
            <LottieView
              style={{
                height: 50,
              }}
              source={require("../../assets/lotties/failed.json")}
              speed={5}
              autoPlay
              loop={false}
            />
            <Text style={{ color: Colors.black, marginTop: 10 }}>
              {message}
            </Text>
          </View>
        </Pressable>
      )}
    </>
  );
};

export default Loading;

const styles = StyleSheet.create({});

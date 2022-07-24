import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import SeparatorLine from "../../components/SeparatorLine/index.tsx";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import routes from "../../constants/routes";

const Tracks = ({ navigation }) => {
  return (
    <View style={[{ flex: 1 }]}>
      <Image
        resizeMode="cover"
        source={require("../../assets/images/lyricbg.png")}
        style={[StyleSheet.absoluteFill, { height: "28%", zIndex: -10 }]}
      />
      <View
        style={{ height: "28%", backgroundColor: "#00000040", padding: 15 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="arrow-back" size={30} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: "auto" }}>
          <Text
            style={{ fontSize: 35, color: Colors.white, fontWeight: "700" }}
          >
            Amnehalew
          </Text>
          <Text
            style={{ fontSize: 22, color: Colors.white, fontWeight: "300" }}
          >
            Dawit Getachew
          </Text>
          <SeparatorLine />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name={"musical-notes-sharp"}
                size={25}
                color={Colors.primary}
              />
              <Text
                style={{ fontSize: 25, color: Colors.white, fontWeight: "300" }}
              >
                {" "}
                10 Tracks
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icon name="star" size={15} color={Colors.yellow} />
                <Icon name="star" size={15} color={Colors.yellow} />
                <Icon name="star" size={15} color={Colors.yellow} />
                <Icon name="star" size={15} color={Colors.yellow} />
                <Icon name="star-half" size={15} color={Colors.yellow} />
                <Text style={[{ color: Colors.white, fontSize: 20 }]}>
                  {"  "}
                  4.5{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={{ marginTop: 10 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <TouchableOpacity
            key={i}
            activeOpacity={0.6}
            onPress={() => navigation.navigate(routes.lyric)}
            style={{
              backgroundColor: Colors.white,
              elevation: 5,
              shadowColor: "#00000040",
              borderRadius: 10,
              marginHorizontal: 10,
              marginVertical: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
              <Text
                style={{ fontSize: 24, color: Colors.black, fontWeight: "700" }}
              >
                Amnehalew
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: Colors.primary,
                  fontWeight: "500",
                }}
              >
                Track 2 - 5:06
              </Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.grey,
                borderTopEndRadius: 10,
                borderBottomEndRadius: 10,
                width: "20%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name={"play"} color={Colors.primary} size={35} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Tracks;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 0,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
});

import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Colors from "../../constants/Colors";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import SeparatorLine from "../../components/SeparatorLine/index.tsx";

const Liyric = ({ navigation }) => {
  const progress = useRef(new Animated.Value(0)).current;

  const lyric = `
ከሥም ፡ ሁሉ ፡ በላይ ፡ ኃያል ፡ ሥም ፡ አለው~
በዚህ ፡ ሥም ፡ አምነን ፡ ድነናል ፡ ይኸው~
ምስክሮቹ ፡ ነን ፡ ሕይወት ፡ ደርሶናል~
ሰማይ ፡ ሲጎበኘን ፡ ለዓለም ፡ በርተናል~
~
ተጠቅልለናል ፡ በክርስቶስ ፡ በኃያሉ ፡ ሥም~
ከነበርንበት ፡ ዓለም ፡ የለንም~
የሚበልጥ ፡ አይተን ፡ የሚደንቅ ፡ ክብር~
ሰውን ፡ ኑ ፡ እንላለን ፡ አልፈን ፡ ከምድር~
~
አምላክ ፡ ሥጋ ፡ ሆነ ፡ ለእኛ ፡ ማለደ~
ከአብ ፡ አስታረቀን ፡ ስርየት ፡ ወረደ~
ሕያው ፡ ልጆቹ ፡ ነን ፡ ዳግም ፡ ወልዶናል~
ዘላለም ፡ ሲያገኘን ፡ ከሞት ፡ ጠፍተናል~
~
ተጠቅልለናል ፡ በክርስቶስ ፡ በኃያሉ ፡ ሥም~
ከነበርንበት ፡ ዓለም ፡ የለንም~
የሚበልጥ ፡ አይተን ፡ የሚደንቅ ፡ ክብር~
ሰውን ፡ ኑ ፡ እንላለን ፡ አልፈን ፡ ከምድር~
~
እናንት ፡ መኳንንቶች ፡ በሩን ፡ ክፈቱ~
የክብር ፡ ንጉሥ ፡ ይግባ ፡ በሩን ፡ ክፈቱ~
ይሄ ፡ ንጉሥ ፡ ማነው ፡ እርሱ ፡ እግዚአብሔር ፡ ነው~
የክብር ፡ ሁሉ ፡ ጌታ ፡ እርሱ ፡ እግዚአብሔር ፡ ነው~
~
እርሱ ፡ እግዚአብሔር ፡ ነው (፪x)~
እርሱ ፡ እግዚአብሔር~
~
የክብር ፡ ሁሉ ፡ ጌታ ፡ የክብር ፡ ሁሉ ፡ ገዢ~
እግዚአብሔር ፡ ነው ፡ ብርቱና ፡ ኃያል (፪x)~
የሰማይ ፡ የምድሩ ፡ የልዑላን ፡ ጌታ~
እግዚአብሔር ፡ ነው ፡ ብርቱና ፡ ኃያል (፪x)~
~
ሆሆ ፡ ኃያሉ ፡ እግዚአብሔር~
እርሱ ፡ እኛን ፡ ጎበኘ~
እንድንዘምርለት ፡ ዙሪያው ፡ ሰበሰበን~
~
ሆሆ ፡ እግዚአብሔር ፡ ረዳን~
እግዚአብሔር ፡ አሰበን~
በየደረስንበት ፡ ኃያል ፡ መዝሙር ፡ ሆነን~
~
ምሥጋና ፡ የተገባው ፡ እርሱ ፡ ነው~
ውዳሴ ፡ የተገባው ፡ እርሱ ፡ ነው~
ለእኛ ፡ ታየን ፡ መድኃኔዓለም~
እንደርሱ ፡ የለም ፡ ዘላለም~
ለእኛ ፡ ተገለጠ ፡ መድኃኔዓለም~
እንደርሱ ፡ የለም ፡ ዘላለም~
~
ዝማሬ ፡ የተገባው ፡ እርሱ ፡ ነው~
ስግደትም ፡ የተገባው ፡ እርሱ ፡ ነው~
ለእኛ ፡ ታየን ፡ መድኃኔዓለም~
እንደርሱ ፡ የለም ፡ ዘላለም~
ለእኛ ፡ ተገለጠ ፡ መድኃኒዓለም~
እንደሱ ፡ የለም ፡ ዘላለም~
  `;

  useEffect(() => {
    Animated.timing(progress, { toValue: 1, useNativeDriver: false }).start();
  }, []);

  return (
    <View style={[{ alignItems: "center", flex: 1 }]}>
      <Image
        resizeMode="cover"
        source={require("../../assets/images/lyricbg.png")}
        style={[StyleSheet.absoluteFill, { height: "25%" }]}
        // blurRadius={1.3}
      />
      <TouchableOpacity
        style={{ width: "100%", padding: 20, alignItems: "flex-start" }}
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}
      >
        <View
          style={{
            backgroundColor: Colors.primary,
            borderRadius: 15,
            padding: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="arrow-back" color={Colors.white} size={28} />
        </View>
      </TouchableOpacity>

      <View
        style={{
          height: "80%",
          width: "95%",
          backgroundColor: "white",
          marginTop: "auto",
          borderRadius: 20,
          padding: 15,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{
                fontSize: 25,
                color: Colors.primary,
                fontWeight: "bold",
              }}
            >
              በሩን ፡ ክፈቱ (Berun Kefetu)
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: Colors.primary,
                alignItems: "center",
              }}
            >
              <Icon name="disc" size={25} color={Colors.primary} /> ሀብተ ፡ ሰማይ
            </Text>
          </View>
          <View style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
              Hanna Tekle
            </Text>
            <Text style={{ fontSize: 15, color: Colors.primary }}>
              V3, Track 2
            </Text>
          </View>
        </View>
        <SeparatorLine />
        <ScrollView style={{ paddingTop: 10 }}>
          {lyric.split("~").map((line) => {
            return (
              <Text
                key={Math.random()}
                style={{ fontSize: 20, lineHeight: 13 }}
              >
                {line}
              </Text>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Liyric;

const styles = StyleSheet.create({});

import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useFonts } from "expo-font";
import ButtonNormal from "../../components/ButtonNormal";
import Styles from "../../constants/Styles";
import routes from "../../constants/routes";
import Colors from "../../constants/Colors";
import { StatusBar } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <>
      <StatusBar hidden={true} />

      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/frontbg.png")}
          resizeMode="cover"
          style={{ height: "100%", width: "100%" }}
        />

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,1)"]}
          locations={[0.3, 0.8]}
          style={styles.background}
        >
          <View style={styles.content}>
            <View style={{ marginBottom: 40 }}>
              <Text
                style={[
                  {
                    color: "white",
                    fontSize: 65,
                    letterSpacing: 1.5,
                  },
                ]}
              >
                Fina
                <Text
                  style={[
                    {
                      fontSize: 65,
                      fontWeight: "300",
                      color: Colors.primary,

                      letterSpacing: 1.5,
                    },
                  ]}
                >
                  Lyrics
                </Text>
              </Text>
              <Text
                style={[
                  {
                    fontSize: 20,
                    textAlign: "left",
                    color: Colors.white,
                    letterSpacing: 1.2,
                    marginLeft: 4,
                  },
                ]}
              >
                Lorem Ipsum sit dolor amet.
              </Text>
            </View>
            <ButtonNormal
              title="Start"
              onPress={() => navigation.navigate(routes.login)}
            />
          </View>
        </LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    paddingTop: 450,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});

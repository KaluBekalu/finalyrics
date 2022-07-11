import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

import Styles from "../../../constants/Styles";
import { RootTabScreenProps } from "../../../types";
import Colors from "../../../constants/Colors";
import React from "react";
import Line from "../../../components/SeparatorLine/index.tsx";
import ButtonNoraml from "../../../components/ButtonNormal";
import ButtonOutline from "../../../components/ButtonOutline";
import routes from "../../../constants/routes";

export default function Register({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
      style={styles.container}
    >
      <Text
        style={[
          {
            color: Colors.black,
            fontSize: 65,
            letterSpacing: 1.5,
          },
        ]}
      >
        Welcome
      </Text>
      <Text
        style={[
          {
            color: Colors.primary,
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

      <Line />

      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <TextInput
          style={styles.input}
          onChangeText={(val) => {
            setEmail(val);
          }}
          value={email}
          keyboardType="email-address"
          autoComplete="name"
          placeholder="Full Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(val) => {
            setEmail(val);
          }}
          value={email}
          keyboardType="email-address"
          autoComplete="email"
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={(val) => {
            setPassword(val);
          }}
          value={password}
          autoComplete="password"
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <ButtonNoraml
        title="Register"
        onPress={() =>
          navigation.navigate(routes.appaNav, { screen: routes.home })
        }
      />

      <Text style={[styles.text, { marginTop: 130 }]}>
        Don't have an account?
      </Text>
      <ButtonOutline title="Login" onPress={() => navigation.goBack()} />
      <Text style={[styles.text, { marginTop: 25, marginBottom: 0 }]}>
        Fina ©
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 100,
    width: 400,
    alignSelf: "center",
    backgroundColor: Colors.white,
  },
  input: {
    height: 60,
    width: 350,
    backgroundColor: Colors.grey,
    marginBottom: 20,
    fontSize: 18,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  text: {
    color: Colors.primary,
    marginBottom: 10,
    fontSize: 18,
  },
});

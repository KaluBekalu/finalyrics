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
import Colors from "../../../constants/Colors";
import React from "react";
import SepratorLine from "../../../components/SeparatorLine/index.tsx";
import ButtonNormal from "../../../components/ButtonNormal";
import ButtonOutline from "../../../components/ButtonOutline";
import routes from "../../../constants/routes";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login({ navigation }: any) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
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

      <SepratorLine />

      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 20,
          backgroundColor: "white",
        }}
      >
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
        <Text style={[styles.text, { textAlign: "left", width: 350 }]}>
          Forgot password?
        </Text>
      </View>

      <ButtonNormal
        title="Login"
        onPress={() =>
          navigation.navigate(routes.appaNav, { screen: routes.home })
        }
      />

      <Text style={[styles.text, { marginTop: 100 }]}>
        Don't have an account?
      </Text>
      <ButtonOutline
        title="Register"
        onPress={() => navigation.navigate(routes.register)}
      />
      <Text style={[styles.text, { marginTop: 100, marginBottom: 30 }]}>
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

import {
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  View,
  Pressable,
} from "react-native";

import Colors from "../../../constants/Colors";
import React from "react";
import SepratorLine from "../../../components/SeparatorLine/index.tsx";
import ButtonNormal from "../../../components/ButtonNormal";
import ButtonOutline from "../../../components/ButtonOutline";
import routes from "../../../constants/routes";
import { login } from "../../../api/auth";
import useAuth from "../../../auth/useAuth";
import LottieView from "lottie-react-native";
import * as Yup from "yup";
import LoadingOverlay from "../../../components/Loading/LoadingOverlay";

export default function Login({ navigation }: any) {
  const auth = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const result = await login(email, password);
      if (result) {
        auth.logIn(result);
      } else {
        setLoading(false);
        setError("Login Failed, try again");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingOverlay
          message="Sigining you in..."
          type="loading"
          onPress={() => {}}
        />
      ) : null}
      {error ? (
        <LoadingOverlay
          message="Login failed, try again."
          type="failed"
          onPress={() => {
            setError("");
          }}
        />
      ) : null}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
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

        <ButtonNormal title="Login" onPress={() => handleSubmit()} />

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
    </>
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

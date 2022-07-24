import {
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TextInput,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import Colors from "../../../constants/Colors";
import React from "react";
import Line from "../../../components/SeparatorLine/index.tsx";
import ButtonNoraml from "../../../components/ButtonNormal";
import ButtonOutline from "../../../components/ButtonOutline";
import routes from "../../../constants/routes";
import useAuth from "../../../auth/useAuth";
import { register } from "../../../api/auth";
import LoadingOverlay from "../../../components/Loading/LoadingOverlay";

export default function Register({ navigation }: any) {
  const auth = useAuth();
  const [fullName, setFullName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleRegister = async () => {
    try {
      setLoading(true);
      const result = await register(
        fullName,
        username.toLowerCase(),
        email.toLowerCase(),
        password
      );
      if (result) {
        auth.logIn(result);
        setLoading(false);
      } else {
        setLoading(false);
        setError("Registration failed, try again");
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingOverlay
          message="Registering you..."
          type="loading"
          onPress={() => {}}
        />
      ) : null}
      {error ? (
        <LoadingOverlay
          message="Registration failed, try again."
          type="failed"
          onPress={() => {
            setError("");
          }}
        />
      ) : null}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 100,
          }}
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
              paddingVertical: 20,
              paddingLeft: 20,
            }}
          >
            <Text style={styles.lable}>Full Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => {
                setFullName(val);
              }}
              value={fullName}
              autoComplete="name"
              placeholder="Full Name"
            />
            <Text style={styles.lable}>Username</Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => {
                setUsername(val);
              }}
              value={username}
              autoComplete="name"
              placeholder="username"
            />
            <Text style={styles.lable}>Email</Text>
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
            <Text style={styles.lable}>Password</Text>
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
              // navigation.navigate(routes.appaNav, { screen: routes.home })
              handleRegister()
            }
          />

          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Text style={[styles.text, { marginTop: 20, marginRight: 10 }]}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={[
                  styles.text,
                  { marginTop: 20, fontSize: 20, fontWeight: "600" },
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          {/* <ButtonOutline title="Login" onPress={() => navigation.goBack()} /> */}
          <Text style={[styles.text, { marginTop: 15, marginBottom: 0 }]}>
            Fina ©
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    alignSelf: "center",
    backgroundColor: Colors.white,
  },
  input: {
    height: 60,
    width: 350,
    backgroundColor: Colors.grey,
    marginBottom: 15,
    fontSize: 18,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  lable: {
    color: Colors.primary,
    marginBottom: 5,
    fontSize: 18,
  },
  text: {
    color: Colors.primary,
    marginBottom: 10,
    fontSize: 18,
  },
});

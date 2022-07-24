import React, { useEffect } from "react";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import "react-native-gesture-handler";
import AuthContext from "./src/auth/context";
import { useState } from "react";
import AuthNavigator from "./src/navigation/AuthNavigator";
import HomeNavigator from "./src/navigation/HomeNavigator";
import { NavigationContainer } from "@react-navigation/native";
import authStorage from "./src/auth/storage";
import Colors from "./src/constants/Colors";
import Loading from "./src/components/Loading/Loading";

export default function App() {
  const [user, setUser]: any = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) {
      setUser(user);
      console.log(user);
      setIsReady(true);
    } else {
      setIsReady(true);
    }
  };

  useEffect(() => {
    restoreUser();
  }, []);

  if (!isReady) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor={"white"} />
        <NavigationContainer>
          {!user ? <AuthNavigator /> : <HomeNavigator />}
        </NavigationContainer>
      </SafeAreaView>
    </AuthContext.Provider>
  );
}

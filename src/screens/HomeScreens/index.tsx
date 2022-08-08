import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "../../constants/Styles";
import Colors from "../../constants/Colors";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import SeparatorLine from "../../components/SeparatorLine/index.tsx";
import { LinearGradient } from "expo-linear-gradient";
import routes from "../../constants/routes";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../../auth/context";
import Loading from "../../components/Loading/Loading";


import { useQuery } from '@apollo/client'
import { getAlbums } from '../../global/graphql/Queries'


const Home = ({ navigation }) => {
  const [searchKey, setSearchKey] = useState("");
  const { user } = useContext(AuthContext);
  const { loading, error, data } = useQuery(getAlbums);



  if (loading) return <Loading />
  if (error) {
    console.log(error)
    return <Text>Error</Text>
  }

  return (
    <>
      <View style={styles.top}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image
            resizeMethod="resize"
            style={{ width: 65, height: 65, borderRadius: 50, marginRight: 10 }}
            source={require("../../assets/images/avatar.png")}
          />
          <View>
            <Text style={[{ color: Colors.black, fontSize: 20 }]}>
              Welcome back
            </Text>
            <Text style={[{ color: Colors.black, fontSize: 30 }]}>
              {user["https://hasura.io/jwt/claims"].firstname}{" "}
              {user["https://hasura.io/jwt/claims"].lastname.substring(0, 1)}.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={{ width: "100%", paddingHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 10,
            }}
          >
            <Text style={[{ color: Colors.black, fontSize: 30 }]}>
              Discover
            </Text>
            <Text
              style={[
                { color: Colors.black, fontSize: 20, alignItems: "center" },
              ]}
            >
              Sort by
              <Icon name="caret-down" size={20} color="black" />
            </Text>
          </View>
          <TextInput
            style={styles.searchInput}
            onChangeText={(val) => {
              setSearchKey(val);
            }}
            value={searchKey}
            placeholder="search..."
          />
        </View>

        <SeparatorLine />
        <ScrollView
          style={{ width: "100%", height: 600 }}
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={false}
        >
          {data.albums.map(i => {
            return <Card key={i.id} album={i} />
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

type props = {
  album: object
}

const Card = ({ album }: props) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.tracks)}
        activeOpacity={0.4}
        style={{
          backgroundColor: "white",
          elevation: 5,
          shadowColor: "#000000",
          borderRadius: 20,
          paddingHorizontal: 10,
          paddingVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
          marginHorizontal: 5,
        }}
      >
        <Image
          resizeMethod="resize"
          style={{ width: 70, height: 95, borderRadius: 15, marginRight: 10 }}
          source={album.albumArt ? { uri: album.albumArt } : require("../../assets/images/avatar.png")}
        />
        <View style={{ flexGrow: 1 }}>
          <View>
            <Text
              style={[{ color: Colors.black, fontSize: 25, fontWeight: "500" }]}
            >
              {album.albumTitle}
            </Text>
            <Text
              style={[{ color: Colors.black, fontSize: 20, fontWeight: "300" }]}
            >
              {album.artist}
            </Text>
          </View>
          <SeparatorLine />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon name="musical-notes" size={20} color={Colors.primary} />
              <Text style={[{ color: Colors.black, fontSize: 20 }]}>
                {album.trackCount} Tracks
              </Text>
            </View>
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
              <Text style={[{ color: Colors.black, fontSize: 20 }]}>
                {"  "}
                4.5{" "}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 15,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 2,
    shadowColor: "#000000",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  main: {
    paddingHorizontal: 5,
    paddingBottom: 20,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: "white",
    // elevation: 5,
    shadowColor: "#00000000",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchInput: {
    height: 40,
    marginVertical: 5,
    backgroundColor: Colors.grey,
    fontSize: 18,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});

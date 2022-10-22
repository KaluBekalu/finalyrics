import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import Colors from "../../constants/Colors";
import SeparatorLine from "../../components/SeparatorLine/index.tsx";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import routes from "../../constants/routes";

import Loading from "../../components/Loading/Loading";

import { useQuery } from "@apollo/client";
import { getAlbumTracks } from "../../global/graphql/Queries";

const Tracks = ({ navigation, route }) => {
  const { id } = route.params;
  const { loading, error, data } = useQuery(getAlbumTracks, {
    variables: { id },
  });

  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <Text>Error</Text>;
  }

  return (
    <View style={[{ flex: 1 }]}>
      <Image
        resizeMode="cover"
        source={
          data.albums[0].albumArt
            ? { uri: data.albums[0].albumArt }
            : require("../../assets/images/avatar.png")
        }
        // blurRadius={2}
        style={[StyleSheet.absoluteFill, { height: "28%", zIndex: -10 }]}
      />
      <View style={{ height: "28%" }}>
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
        <View
          style={{
            marginTop: "auto",
            backgroundColor: "#00000090",
            padding: 15,
          }}
        >
          <Text
            style={{ fontSize: 35, color: Colors.white, fontWeight: "700" }}
          >
            {data.albums[0].albumTitle}
          </Text>
          <Text
            style={{ fontSize: 22, color: Colors.white, fontWeight: "300" }}
          >
            {data.albums[0].artist}
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
                {data.albums[0].trackCount} Tracks
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
        {!data.albums[0].tracks.length ? (
          <View style={{ padding: 15, justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 24,
                color: Colors.black,
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Sorry, there is no registered track for this album for now.
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: Colors.primary,
                fontWeight: "500",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Check again, a while later.
            </Text>
          </View>
        ) : (
          data.albums[0].tracks.map((i) => (
            <TouchableOpacity
              key={i.id}
              activeOpacity={0.6}
              onPress={() =>
                navigation.navigate(routes.lyric, {
                  lyric: i.body,
                  title: i.trackTitle,
                  trackNumber: i.trackNumber,
                  albumTitle: data.albums[0].albumTitle,
                  albumArt: data.albums[0].albumArt,
                  artist: data.albums[0].artist,
                  id: i.id,
                })
              }
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
                  style={{
                    fontSize: 24,
                    color: Colors.black,
                    fontWeight: "700",
                  }}
                >
                  {i.trackTitle}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: Colors.primary,
                    fontWeight: "500",
                  }}
                >
                  Track {i.trackNumber} - 5:06
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
          ))
        )}
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

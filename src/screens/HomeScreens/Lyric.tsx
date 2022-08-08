import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Colors from "../../constants/Colors";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import SeparatorLine from "../../components/SeparatorLine/index.tsx";
import { WebView } from "react-native-webview";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";

import { useMutation } from "@apollo/client";
import { updateTrack } from "../../global/graphql/Mutations";
const Liyric = ({ route, navigation }) => {
  const progress = useRef(new Animated.Value(0)).current;
  const [update, { data, loading, error }] = useMutation(updateTrack);

  const { lyric, id, title, albumTitle, trackNumber, artist, albumArt } =
    route.params;
  const lyricHtml = `<meta name="viewport" content="width=device-width, initial-scale=1.3">
  ${lyric}
  `;

  const richText = useRef();

  const [descHTML, setDescHTML] = useState("");
  const [showDescError, setShowDescError] = useState(false);
  const [editingMode, setEditingMode] = useState(false);

  const richTextHandle = (descriptionText) => {
    if (descriptionText) {
      setShowDescError(false);
      setDescHTML(descriptionText);
    } else {
      setShowDescError(true);
      setDescHTML("");
    }
  };

  const submitContentHandle = () => {
    const replaceHTML = descHTML.replace(/<(.|\n)*?>/g, "").trim();
    const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();

    if (replaceWhiteSpace.length <= 0) {
      setShowDescError(true);
    } else {
      // send data to your server!
      console.log(descHTML);
      update({
        variables: {
          _id: id,
          body: descHTML,
        },
      })
        .then((res) => {
          console.log(res);
          navigation.goBack();
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    Animated.timing(progress, { toValue: 1, useNativeDriver: false }).start();
  }, []);

  return (
    <KeyboardAvoidingView style={[{ alignItems: "center", flex: 1 }]}>
      <Image
        resizeMode="cover"
        source={
          albumArt
            ? { uri: albumArt }
            : require("../../assets/images/lyricbg.png")
        }
        style={[StyleSheet.absoluteFill, { height: "25%" }]}
      />
      <TouchableOpacity
        style={{ width: "100%", padding: 20, alignItems: "flex-start" }}
        activeOpacity={0.5}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="arrow-back" color={Colors.white} size={28} />
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
              {title}
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: Colors.primary,
                alignItems: "center",
              }}
            >
              <Icon name="disc" size={25} color={Colors.primary} /> {albumTitle}
            </Text>
          </View>
          <View style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
              {artist}
            </Text>
            <Text style={{ fontSize: 15, color: Colors.primary }}>
              {albumTitle} - Track {trackNumber}
            </Text>
          </View>
        </View>
        <SeparatorLine />
        {lyric ? (
          <WebView
            style={{ width: "100%", height: "100%" }}
            originWhitelist={["*"]}
            source={{ html: lyricHtml }}
          />
        ) : !editingMode ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            <Text style={{ fontSize: 20, color: "black" }}>
              No lyric was recorded for this track.{" "}
            </Text>
            <TouchableOpacity
              onPress={() => setEditingMode(true)}
              style={{
                backgroundColor: Colors.primary,
                padding: 10,
                borderRadius: 10,
                marginVertical: 20,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: Colors.white,
                }}
              >
                Submit lyric?
              </Text>
              <Icon name="pencil" size={25} color={Colors.white} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flexGrow: 1 }}>
            <RichToolbar
              editor={richText}
              selectedIconTint="#873c1e"
              iconTint="#312921"
              actions={[
                actions.insertImage,
                actions.setBold,
                actions.setItalic,
                actions.insertBulletsList,
                actions.insertOrderedList,
                actions.insertLink,
                actions.setStrikethrough,
                actions.setUnderline,
              ]}
              style={{}}
            />
            <KeyboardAvoidingView style={{ flexGrow: 1, borderWidth: 1 }}>
              <RichEditor
                ref={richText} // from useRef()
                onChange={richTextHandle}
                placeholder="Write your lyric here :)"
                androidHardwareAccelerationDisabled={true}
                style={{ borderWidth: 0.5 }}
                initialHeight={250}
                scrollEnabled={true}
                useContainer={false}
              />
            </KeyboardAvoidingView>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity
                onPress={() => setEditingMode(false)}
                style={{
                  alignSelf: "center",
                  backgroundColor: Colors.primary,
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 10,
                  marginTop: 10,
                }}
              >
                <Text style={{ color: Colors.white, fontSize: 20 }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={submitContentHandle}
                style={{
                  alignSelf: "center",
                  backgroundColor: Colors.primary,
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 10,
                  marginTop: 10,
                }}
              >
                <Text style={{ color: Colors.white, fontSize: 20 }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Liyric;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#ccaf9b",
    padding: 20,
    alignItems: "center",
  },

  headerStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 10,
  },

  richTextContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    width: "100%",
    marginBottom: 10,
  },

  richTextEditorStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    fontSize: 50,
  },

  richTextToolbarStyle: {
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  errorTextStyle: {
    color: "#FF0000",
    marginBottom: 10,
  },

  saveButtonStyle: {
    backgroundColor: "#c6c3b3",
    borderWidth: 1,
    borderColor: "#c6c3b3",
    borderRadius: 10,
    padding: 10,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    fontSize: 20,
  },

  textButtonStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#312921",
  },
});

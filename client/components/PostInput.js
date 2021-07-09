import React, { useState, useEffect } from "react";
import { IconButton, Button, TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import {
  Platform,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { setPosts } from "../store/features/postSlice";
import { useDispatch } from "react-redux";
import uuid from "uuid";
import MoreInputDialog from "./MoreInputDialog";

const host = "http://192.168.1.99:3000/";

export default function SelectImage() {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [comment, setComment] = useState("");
  const [showInputDialog, setShowInputDialog] = useState(false);

  // Request Permissions to acces camera role in order to select image
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  /* Function to select image from camera roll */
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result);
    }
  };

  /* Function to send image and comment to node.js backend,
     if response returns 400 then either image or comment are not 
     present (or can't access endpoint) -> Show Alert. 
     Resets Comment and image to empty after response 200. */
  const uploadPost = async () => {
    //Had to set url to ip address in order to work on android
    //just specifing localhost worked only on IOS
    const res = await fetch(host, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imgsource: image.base64,
        comment: comment,
      }),
    });
    if (res.status == 200) {
      dispatch(
        setPosts({
          id: uuid(),
          comment: comment,
          image: image,
        })
      );
      setComment("");
      setImage("");
    } else {
      setShowInputDialog(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Comment"
          value={comment}
          onChangeText={(comment) => setComment(comment)}
          theme={{
            colors: {
              primary: "#044661",
            },
          }}
        />

        {image === "" ? (
          <IconButton
            icon="camera"
            color="#044661"
            onPress={pickImage}
            size={30}
          />
        ) : (
          <TouchableOpacity onPress={pickImage}>
            <Image
              source={image}
              style={{
                height: 50,
                width: 50,
                marginRight: 2,
                borderRadius: 2,
                padding: 8,
              }}
            />
          </TouchableOpacity>
        )}
      </View>

      <Button
        mode="contained"
        color="#044661"
        onPress={uploadPost}
        style={styles.createPostBtn}
      >
        Create Post
      </Button>

      <MoreInputDialog
        visible={showInputDialog}
        hideDialog={() => setShowInputDialog(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 8,
  },
  createPostBtn: {
    width: 150,
    alignSelf: "center",
    marginTop: 10,
  },
});

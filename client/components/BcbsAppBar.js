import React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet, Image } from "react-native";

export default function BcbsAppBar() {
  return (
    <Appbar.Header style={styles.appBarContainer}>
      <Appbar.Content
        title={
          <Image source={require("../assets/logo.png")} style={styles.logo} />
        }
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  appBarContainer: {
    backgroundColor: "#044661",
  },
  logo: {
    width: 300,
    height: 40,
    resizeMode: "contain",
    paddingBottom: 20,
  },
});

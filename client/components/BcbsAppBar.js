import React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet, Image } from "react-native";

export default function BcbsAppBar() {
  return (
    <Appbar style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
    </Appbar>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 105,
    backgroundColor: "#044661",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    resizeMode: "contain",
    marginTop: 20,
  },
});

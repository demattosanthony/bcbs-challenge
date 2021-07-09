import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import BcbsAppBar from "../components/BcbsAppBar";
import PostInput from "../components/PostInput";
import PostList from "../components/PostList";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <BcbsAppBar />
      <PostInput />
      <PostList />
    </View>
  );
}

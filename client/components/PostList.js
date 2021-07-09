import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import { selectPosts } from "../store/features/postSlice";
import { useSelector } from "react-redux";
import { List } from "react-native-paper";

export default function PostList() {
  const posts = useSelector(selectPosts);

  return (
    // Render All Post saved in Redux in a Scrollable List View
    <View style={{ flex: 1 }}>
      <ScrollView>
        <List.Subheader>Post List</List.Subheader>
        {posts.length !== 0 ? (
          posts.map((post) => {
            // console.log(post);
            return (
              <View key={post.id} style={styles.listItem}>
                <Image
                  source={post.image}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 4,
                    marginLeft: 10,
                  }}
                />
                <Text style={styles.comment}>{post.comment}</Text>
              </View>
            );
          })
        ) : (
          <Text style={styles.noPosts}>No Posts Created </Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    display: "flex",
  },
  comment: {
    fontSize: 22,
    marginLeft: 10,
    flex: 1,
  },
  noPosts: {
    fontSize: 35,
    justifyContent: "center",
    marginTop: 50,
    textAlign: "center",
  },
});

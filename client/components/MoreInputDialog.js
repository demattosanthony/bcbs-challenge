import React from "react";
import { View } from "react-native";
import { Button, Paragraph, Dialog, Portal } from "react-native-paper";

export default function MoreInputDialog({ visible, hideDialog }) {
  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Error!</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Please make sure to add comment and image</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              theme={{
                colors: {
                  primary: "#044661",
                },
              }}
              onPress={hideDialog}
            >
              Okay
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

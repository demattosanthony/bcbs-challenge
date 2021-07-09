import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store/configureStore";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <HomeScreen />
      </PaperProvider>
    </StoreProvider>
  );
}

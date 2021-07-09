import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store/configureStore";

export default function App() {
  return (
    <StoreProvider store={store}>
      <HomeScreen />
    </StoreProvider>
  );
}

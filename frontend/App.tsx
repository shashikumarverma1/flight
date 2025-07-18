import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./navigation/bottomTab";
import RootStack from "./navigation/rootStack";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default  function App() {

  return (
    <NavigationContainer>
      <RootStack  />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

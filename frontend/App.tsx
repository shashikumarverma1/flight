import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./navigation/bottomTab";
import RootStack from "./navigation/rootStack";
import { useState } from "react";

export default function App() {
  const [isAuthenticated , setIsAuthenticated]=useState(false)
  return (
    <NavigationContainer>
      <RootStack isAuthenticated={isAuthenticated} />
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

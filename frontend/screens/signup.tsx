// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const Signup = () => {
  const [useData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigation: any = useNavigation();
  const signUpHandle = async () => {

    navigation.navigate("Home")
    return;
    if (!useData.name) {
      alert("please add name");
      return;
    }
    if (!useData.mobile) {
      alert("please add mobile");
      return;
    }
    if (!useData.email) {
      alert("please add email");
      return;
    }
    if (!useData.password) {
      alert("please add password");
      return;
    }
    let name = await AsyncStorage.getItem("name");

    if (!name) {

    } else {
      alert("Already user please login");
    }
  };
  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
      <View style={{ marginTop: 50 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={{ paddingTop: 20 }}>
            <Ionicons name="arrow-back-outline" size={23} />
          </Text>
        </Pressable>
        <View style={{ marginBottom: 45 }}>
          <Text style={{ marginTop: 50, fontWeight: "800", fontSize: 30 }}>
            Sign up
          </Text>

        </View>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 20,
            marginBottom: 10,
            color: "#666666",
          }}
        >
          Name
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={(e) => setUserData({ ...useData, name: e })}
          value={useData.name}
          placeholder="Enter your name"
        />
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 20,
            marginBottom: 10,
            color: "#666666",
          }}
        >
          Email
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={(e) => setUserData({ ...useData, email: e.trim() })}
          value={useData.email}
          placeholder="Enter your email"
        />

        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 20,
            marginBottom: 10,
            color: "#666666",
          }}
        >
          Password
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setUserData({ ...useData, password: e.trim() })}
          value={useData.password}
          secureTextEntry={true}
          placeholder="Enter your password"
        />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginHorizontal: 20,
          }}
        >
          <Pressable
            style={styles.signupButtonContainer}
            onPress={signUpHandle}
          >
            <Text style={styles.signupLable}>Signup</Text>
          </Pressable>
        </View>

        <View
          style={styles.allReadyAccountContainer}
        >
          <Text style={styles.allreadyAccount}>
            Already have account ?{" "}
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ color: "blue", fontSize: 15, fontWeight: "500" }}>
              Signin
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signupButtonContainer:{
              backgroundColor: "#0D88C3",
              height: 45,
              width: windowWidth / 1.05,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "grey",
            },
  signupLable:{ color: "#ffff", fontWeight: "800" },
  allReadyAccountContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10
  },
  allreadyAccount: {
    color: "grey", fontSize: 15, fontWeight: "500"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

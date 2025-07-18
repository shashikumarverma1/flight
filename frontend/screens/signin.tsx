
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import {
  TextInput,
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Login = () => {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    abc();
  }, []);
  async function abc() {

    // setUserData({ ...userData, email, password });

  }
  const signUpHandle = () => {
  
    if (!userData.email || !userData.password) {
      return;
    }
    // navigation.navigate("Home");
    // setUserDetails(true);
  };
  const navigation = useNavigation();

  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
      <View style={{ marginTop: 50 }}>
     
        <View style={{ marginBottom: 45 }}>
          <Text style={{ marginTop: 50, fontWeight: "800", fontSize: 30 }}>
            Sign in
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
          Email
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={(e) => setUserData({ ...userData, email: e })}
          value={userData.email}
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
          onChangeText={(e) => setUserData({ ...userData, password: e })}
          value={userData.password}
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
            style={{
              backgroundColor: "#0D88C3",
              height: 45,
              width: windowWidth / 1.05,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "grey",
            }}
            onPress={() => signUpHandle()}
          >
            <Text style={{ color: "#ffff", fontWeight: "800" }}>Signin</Text>
          </Pressable>
        </View>
       <View style={{  display:"flex" , justifyContent:"center" , flexDirection:"row" ,}}>
    
       </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
           marginTop:5
          }}
        >
          <Text style={{ color: "grey", fontSize: 15, fontWeight: "500" }}>
            Do'nt have account ?{" "}
          </Text>
          <Pressable
            onPress={() => {
              // Signup
              navigation.navigate("Signup");
            }}
          >
            <Text style={{ color: "blue", fontSize: 15, fontWeight: "500" }}>
              Sign up
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
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
    color: "#666666",
  },
});

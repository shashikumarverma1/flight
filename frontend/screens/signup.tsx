// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext, useReducer, useState } from "react";
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
import useUserStore from "../store/userStore";
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { isValidEmail } from "../utils/validEmail";
type RootStackParamList = {
  Login: undefined
  Home: undefined
}

type SignupScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>
}

export const Signup: React.FC<SignupScreenProps> = ({ navigation })=> {

  const [emailErr, setEmailErr] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const [nameErr, setNameErr] = useState("")
  const setUser = useUserStore((state) => state.setUser)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signUpHandle = async () => {
    console.log(userData, "useData")
    // navigation.navigate("Home")
    // return;

    if (!userData?.name) {
      setNameErr("name is required")
      return;
    }

    if (!userData?.email) {
      setEmailErr("email is required")
 
      return;
    }
      if(!isValidEmail(userData.email.trim())){
            setEmailErr('enter a valid email')
          return
        }
    if (!userData?.password) {
      setPasswordErr("password is required")

      return;
    }
    setUser(userData)

  };

  const handleChange=useCallback((value:any)=>{
setUserData({...userData , ...value})
setEmailErr("")
setNameErr("")
setPasswordErr("")
  } , [setUserData , userData])

  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
      <View style={{ marginTop: 50 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={{ paddingTop: 20 }}>
            <Ionicons name="arrow-back-outline" size={23} />
          </Text>
        </Pressable>
        <View style={{ marginBottom: 45 }}>
          <Text style={styles.signupHeading}>
            Sign up
          </Text>

        </View>
        <Text
          style={styles.lable}
        >
          Name
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange({ name: e })}
          value={userData.name}
          placeholder="Enter your name"
        />
        {
          nameErr && <Text style={styles.err}>{nameErr}</Text>
        }
        <Text
          style={styles.lable}
        >
          Email
        </Text>

        <TextInput
          style={styles.input}
      
            onChangeText={(e) => handleChange({ email: e.trim() })}
          value={userData.email}
          placeholder="Enter your email"
        />
        {
          emailErr && <Text style={styles.err}>{emailErr}</Text>
        }
        <Text
          style={styles.lable}
        >
          Password
        </Text>
        <TextInput
          style={styles.input}

           onChangeText={(e) => handleChange({ password: e.trim() })}
          value={userData.password}
          secureTextEntry={true}
          placeholder="Enter your password"
        />

        {
          passwordErr && <Text style={styles.err}>{passwordErr}</Text>
        }
        <View
          style={[styles.signupButtonContainer ,  (!userData.name || !userData.email || !userData.password) && { opacity: 0.5 }]}
        >
          <Pressable
            style={styles.signupButtonContainer}
            onPress={signUpHandle}
             disabled={!userData.name || !userData.email || !userData.password}
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
            <Text style={styles.signinLeble}>
              Signin
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  err: {
    fontSize: 14,
    fontWeight: "400",
    color: "red",
    paddingBottom: 10,
    marginTop: -10
  },
  signinLeble: { color: "blue", fontSize: 15, fontWeight: "500" },
  signupHeading: {
    marginTop: 50,
    fontWeight: "800",
    fontSize: 30
  },
  lable: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 20,
    marginBottom: 10,
    color: "#666666",
  },
  // signupButtonContainer:{
  //           display: "flex",
  //           justifyContent: "center",
  //           flexDirection: "row",
  //           marginHorizontal: 20,
  //         },
  signupButtonContainer: {
    backgroundColor: "#0D88C3",
    height: 45,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
 
  },
  signupLable: { color: "#ffff", fontWeight: "800" },
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



import { useCallback, useContext, useEffect, useState } from "react";
import {
  TextInput,
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
type RootStackParamList = {
  Signup: undefined;
  Home: undefined;
}
type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Signup'>
}
export const Login: React.FC<NavigationProps> = ({ navigation }) => {
  const [emailErr, setEmailErr] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const signInHandle = () => {

    if (!userData.email) {
      setEmailErr('email is required field')
      return;
    }
    if (!userData.password) {
      setPasswordErr('password is required field')
      return;
    }
    console.log(userData, "iser")
  };
  const handleChange = useCallback((value: any) => {

    setUserData({ ...userData, ...value })
    setEmailErr("")
    setPasswordErr("")
  }, [setUserData, userData])

  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
      <View style={{ marginTop: 50 }}>

        <View style={{ marginBottom: 45 }}>
          <Text style={styles.signinHeading}>
            Sign in
          </Text>

        </View>
        <Text
          style={styles.leble}
        >
          Email
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange({ email: e })}
          value={userData.email}
          placeholder="Enter your email"
        />
        {
          emailErr && <Text style={styles.err}>{emailErr}</Text>
        }
        <Text
          style={styles.leble}
        >
          Password
        </Text>
        <TextInput
          style={styles.input}

          onChangeText={(e) => handleChange({ password: e })}
          value={userData.password}
          secureTextEntry={true}
          placeholder="Enter your password"
        />
        {
          passwordErr && <Text style={styles.err}>{passwordErr}</Text>
        }
        <Pressable
          style={styles.signinContainer}
          onPress={() => signInHandle()}
        >
          <Text style={styles.signinLableStyle}>Signin</Text>
        </Pressable>

        <View
          style={styles.allReadyTextContainer}
        >
          <Text style={styles.allReadyAccount}>
         Don’t have an account?
          </Text>
          <Pressable
            onPress={() => {
              // Signup
              navigation.navigate("Signup");
            }}
          >
            <Text style={styles.signinLable}>
              Sign up
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
  signinLableStyle: { color: "#ffff", fontWeight: "800" },
  allReadyTextContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 5
  },
  allReadyAccount: { color: "grey", fontSize: 15, fontWeight: "500" },
  signinLable: { color: "blue", fontSize: 15, fontWeight: "500" },
  signinContainer: {
    backgroundColor: "#0D88C3",
    height: 45,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "grey",
  },
  leble: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 20,
    marginBottom: 10,
    color: "#666666",
  },
  signinHeading: { marginTop: 50, fontWeight: "800", fontSize: 30 },
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

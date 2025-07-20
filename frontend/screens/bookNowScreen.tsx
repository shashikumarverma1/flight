import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import useUserStore from "../store/userStore";
import { CommonActions } from "@react-navigation/native";

const BookNowScreen = ({ navigation, route }) => {
     const { user } = useUserStore()
    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const [error, setError] = useState("");
 const handlePayment = () => {
    const options = {
      description: "Credits towards consultation",
      image: "https://your-logo-url.com/logo.png",
      currency: "INR",
      key: "rzp_test_XZqevi0iNDKcH1", // Your Razorpay Key ID
      amount: 100, // 5000 paise = INR 50
      name: "flight",
      prefill: {
        email: "shashikumarverma1996@gmail.com",
        contact: "7007414506",
        name: "shashi kumar verma",
      },
      theme: { color: "#F37254" },
    };

    // RazorpayCheckout?.open(options)
    //   .then((data) => {
    //     // handle success
    //     Alert.alert(`Success: ${data.razorpay_payment_id}`);
    //   })
    //   .catch((error) => {
    //     // handle failure
    //     Alert.alert(`Error: ${error} | ${error.description}`);
    //   });
  Alert.alert(
    'Success',
    'Your flight is booked!',
    [
      {
        text: 'OK',
        onPress: () => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            })
          );
        },
      },
    ],
    { cancelable: false }
  );
  };
 
 

    const handleBookNow = () => {
        // Basic validation
        if (!name || !email) {
            setError("Please fill all fields.");
            return;
        }

        // Clear error
        setError("");

  handlePayment()
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Passenger Information</Text>
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={name}
                onChangeText={(text) => setName(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Email Address"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Text style={styles.fair}>Fair : 500$</Text>
            <TouchableOpacity style={styles.button} onPress={handleBookNow}>
                <Text style={styles.buttonText}>Proceed to Payment</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BookNowScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
        flex: 1,
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop:30
    },
    fair: {
        fontSize: 20,
        fontWeight: "bold",
        color: "green"
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#0D88C3",
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
    error: {
        color: "red",
        marginBottom: 10,
    },
});



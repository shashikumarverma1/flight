import React from "react"
import { Text, TouchableOpacity, StyleSheet } from "react-native"
export const Button = ({ lable, lableStyle, ButtonContainer, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.signupButtonContainer, ButtonContainer]}
            onPress={onPress}
        >
            <Text style={[styles.signupLable, lableStyle]}>{lable}</Text>
        </TouchableOpacity>
    )
}


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
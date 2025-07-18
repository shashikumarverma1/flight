import React , { useEffect, useState } from "react";
import {  View, Text, StyleSheet, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const Dashboard = ({ navigation }:{navigation:any}) => {


  return (
    <ScrollView style={{ marginTop: 50 ,   }}>
      <Text style={styles.heading}>Dashboard</Text>

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
  heading: {
    textAlign:"center" , fontSize:17 , fontWeight:"600" 
  },
  SubHeading:{
   fontSize:16 , fontWeight:"500" 
  },
  justifyBetween:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  }
 
});

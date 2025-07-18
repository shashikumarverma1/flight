
import React from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
const windowhight = Dimensions.get("window").height;
export const LoadingScreen = () => (
  <View style={[styles.container, styles.horizontal]}>

    <ActivityIndicator size="large" color="#000000" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height:windowhight * .9
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});


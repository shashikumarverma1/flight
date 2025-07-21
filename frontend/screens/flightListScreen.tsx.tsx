import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { minToHour } from "../utils/formatDuration";
import { flightList } from "../data/flights";
import useFlightStore from "../store/flightStore";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/rootStack";

type FlightListScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

export const FlightListScreen:React.FC<FlightListScreenProps> = ({ navigation }) => {
  const flights = useFlightStore(state => state.flights);
   const [flightData , setFlightData]=useState(flights )
  useEffect(()=>{
    if(!flights?.length){
 setFlightData(flightList)
    }
  },[])

  const renderFlightCard = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("FlightDetailsScreen", { flight: item })}
        style={styles.card}
      >
        {/* Airline Info */}
        <View style={styles.cardHeader}>
          <Image
            source={{ uri: item.carriers.marketing[0].logoUrl }}
            style={styles.logo}
          />
          <Text style={styles.airline}>{item.carriers.marketing[0].name}</Text>
        </View>

        {/* Route Info */}
        <View style={styles.routeRow}>
          <Text style={styles.code}>{item.origin.displayCode}</Text>
          <Ionicons name="airplane" size={18} color="#0D88C3" style={{ marginHorizontal: 8 }} />
          <Text style={styles.code}>{item.destination.displayCode}</Text>
        </View>

        {/* Extra Info */}
        <Text style={styles.subtitle}>From: {item.origin.name}</Text>
        <Text style={styles.subtitle}>To: {item.destination.name}</Text>
        <Text style={styles.subtitle}>Duration: {minToHour(item.durationInMinutes)}</Text>
        <Text style={styles.stops}>
          {item.stopCount === 0 ? 'Non-stop' : `${item.stopCount} stop(s)`}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subHeading}>Available Flights</Text>
      <FlatList
        data={flightData}
        keyExtractor={(item) => item.id}
        renderItem={renderFlightCard}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
             ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No data available</Text>
        </View>
      }
      />
    </View>
  );
};

const styles = StyleSheet.create({
    item: {
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5,
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: 'gray',
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F9FC",
    padding: 16,
    
  },
  subHeading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#1A1A1A",
    paddingTop:30
  },
  listContent: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 4,
    marginRight: 10,
  },
  airline: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0D88C3",
  },
  routeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  code: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 2,
  },
  stops: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#C0392B",
  },
});

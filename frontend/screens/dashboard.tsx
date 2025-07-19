import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import { CustomDropDown } from "../components/customSearch";
import useAirportStore from "../store/airPortStore";
import useFlightStore from "../store/userStore";
import { flightList } from "../data/flights";
import { minToHour } from "../utils/formatDuration";
import { Ionicons } from "@expo/vector-icons";

export const Dashboard = ({ navigation }: { navigation: any }) => {
  const { searchAirport } = useAirportStore();
  const { flights } = useFlightStore();

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim().length === 0) return;
    searchAirport(query);
  };

  const renderFlightCard = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("FlightDetailsScreen", { flight: item })}
        style={styles.card}
      >
        <View style={styles.cardHeader}>
          <Image
            source={{ uri: item.carriers.marketing[0].logoUrl }}
            style={styles.logo}
          />
          <Text style={styles.airline}>{item.carriers.marketing[0].name}</Text>
        </View>

        <View style={styles.routeRow}>
          <Text style={styles.code}>{item.origin.displayCode}</Text>
          <Ionicons name="airplane" size={20} color="#0D88C3" />
          <Text style={styles.code}>{item.destination.displayCode}</Text>
        </View>

        <Text style={styles.subtitle}>From: {item.origin.name}</Text>
        <Text style={styles.subtitle}>To: {item.destination.name}</Text>
        <Text style={styles.subtitle}>Duration: {minToHour(item.durationInMinutes)}</Text>
        <Text style={styles.stops}>
          Stops: {item.stopCount === 0 ? 'Non-stop' : `${item.stopCount} stop(s)`}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Search Flights</Text>

      <View style={styles.dropdownWrapper}>
        <Text style={styles.label}>From</Text>
        <CustomDropDown
          onSelect={setFrom}
          lable="Select from"
          selectedItem={from}
          data={[
            { id: 1, title: "London Heathrow" },
            { id: 2, title: "Dublin" },
          ]}
        />
      </View>

      <View style={styles.dropdownWrapper}>
        <Text style={styles.label}>To</Text>
        <CustomDropDown
          onSelect={setTo}
          lable="Select to"
          selectedItem={to}
          data={[
            { id: 1, title: "New York" },
            { id: 2, title: "Berlin" },
          ]}
        />
      </View>

      <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>

      <Text style={styles.subHeading}>Available Flights</Text>

      <FlatList
        data={flightList}
        keyExtractor={(item) => item.id}
        renderItem={renderFlightCard}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 16,
  },
  dropdownWrapper: {
    marginBottom: 12,
  },
  label: {
    marginBottom: 4,
    fontWeight: "500",
    color: "#333",
  },
  searchBtn: {
    backgroundColor: "#0D88C3",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  searchText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: "contain",
  },
  airline: {
    fontSize: 16,
    fontWeight: "600",
  },
  routeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  code: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#444",
    marginBottom: 2,
  },
  stops: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
  },
});

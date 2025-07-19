import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

const AirportSearchScreen = () => {
  const [query, setQuery] = useState('new');
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAirports = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
        {
          params: { query, locale: 'en-US' },
          headers: {
            'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
            'x-rapidapi-key': '36ad8205e7mshb95171a0879e5eap13ce94jsnf666e35a4b99',
          },
        }
      );
      setAirports(response.data.data || []);
    } catch (error) {
      console.error('Error fetching airport data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Search Airport</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter airport/city"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={fetchAirports} />

      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        airports.map((airport, index) => (
          <View key={index} style={styles.airportCard}>
            <Text>{airport.name}</Text>
            <Text>{airport.city}</Text>
            <Text>{airport.country}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default AirportSearchScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 50,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 10,
  },
  airportCard: {
    padding: 10,
    marginVertical: 6,
    backgroundColor: '#f2f2f2',
    borderRadius: 6,
  },
});

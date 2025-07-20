import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import moment from 'moment';
import { Button } from '../components/Button';

const FlightDetailsScreen = ({ route , navigation }) => {
  const { flight } = route.params;

  const {
    origin,
    destination,
    durationInMinutes,
    stopCount,
    departure,
    arrival,
    carriers,
    segments,
  } = flight;

  const formatTime = (time) => moment(time).format('hh:mm A');
  const formatDate = (time) => moment(time).format('MMM D, YYYY');
  const formatDuration = (mins) => `${Math.floor(mins / 60)}h ${mins % 60}m`;
const BookNow=()=>{
navigation.navigate("BookNowScreen")
}
  return (
    <ScrollView style={styles.container}>
      {/* Airline Info */}
      <View style={styles.header}>
        <Image source={{ uri: carriers.marketing[0].logoUrl }} style={styles.logo} />
        <Text style={styles.airline}>{carriers.marketing[0].name}</Text>
      </View>

      {/* Flight Summary */}
      <View style={styles.card}>
        <Text style={styles.route}>
          {origin.displayCode} → {destination.displayCode}
        </Text>
        <Text style={styles.time}>
          {formatTime(departure)} - {formatTime(arrival)}
        </Text>
        <Text style={styles.date}>{formatDate(departure)}</Text>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Duration:</Text>
          <Text style={styles.detailValue}>{formatDuration(durationInMinutes)}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Stops:</Text>
          <Text style={styles.detailValue}>
            {stopCount === 0 ? 'Non-stop' : `${stopCount} stop${stopCount > 1 ? 's' : ''}`}
          </Text>
        </View>
      </View>
      <Button lable={"Book Now"} lableStyle={undefined} ButtonContainer={undefined} onPress={BookNow}/>
    </ScrollView>
  );
};

export default FlightDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  airline: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D88C3',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  route: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  time: {
    fontSize: 16,
    marginTop: 4,
    color: '#444',
  },
  date: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  detailLabel: {
    fontSize: 14,
    color: '#555',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#1A1A1A',
  },
  segmentCard: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  segmentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  segmentCode: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  segmentDuration: {
    fontSize: 14,
    color: '#444',
  },
  segmentTime: {
    fontSize: 14,
    color: '#333',
  },
  segmentDate: {
    fontSize: 12,
    color: '#777',
    marginBottom: 4,
  },
  flightDetails: {
    fontSize: 13,
    color: '#444',
    marginTop: 2,
  },
});

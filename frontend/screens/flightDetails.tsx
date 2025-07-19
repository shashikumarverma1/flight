import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import moment from 'moment';

const FlightDetailsScreen = ({ route }) => {
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
  const formatDuration = (mins) =>
    `${Math.floor(mins / 60)}h ${mins % 60}m`;

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: carriers.marketing[0].logoUrl }}
          style={styles.logo}
        />
        <Text style={styles.airline}>{carriers.marketing[0].name}</Text>
      </View>

      {/* Flight Summary */}
      <View style={styles.flightInfo}>
        <Text style={styles.route}>
          {origin.displayCode} → {destination.displayCode}
        </Text>
        <Text style={styles.time}>
          {formatTime(departure)} - {formatTime(arrival)}
        </Text>
        <Text style={styles.date}>{formatDate(departure)}</Text>
        <Text style={styles.duration}>Total Duration: {formatDuration(durationInMinutes)}</Text>
        <Text style={styles.stops}>
          Stops: {stopCount === 0 ? 'Non-stop' : `${stopCount} stop${stopCount > 1 ? 's' : ''}`}
        </Text>
      </View>

      {/* Segments */}
      <View style={styles.segmentContainer}>
        <Text style={styles.sectionTitle}>Flight Segments</Text>
        {segments.map((seg, index) => (
          <View key={seg.id} style={styles.segmentCard}>
            <View style={styles.segmentRow}>
              <Text style={styles.segmentCode}>
                {seg.origin.displayCode} → {seg.destination.displayCode}
              </Text>
              <Text>{formatDuration(seg.durationInMinutes)}</Text>
            </View>
            <Text style={styles.segmentTime}>
              {formatTime(seg.departure)} - {formatTime(seg.arrival)}
            </Text>
            <Text style={styles.segmentDate}>{formatDate(seg.departure)}</Text>
            <Text>Flight No: {seg.flightNumber}</Text>
            <Text>Carrier: {seg.marketingCarrier.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default FlightDetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  airline: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  flightInfo: {
    marginBottom: 20,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
  },
  route: {
    fontSize: 20,
    fontWeight: '600',
  },
  time: {
    fontSize: 16,
    marginTop: 4,
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginTop: 2,
  },
  duration: {
    marginTop: 6,
    fontWeight: '500',
  },
  stops: {
    color: '#444',
    marginTop: 2,
  },
  segmentContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  segmentCard: {
    backgroundColor: '#fafafa',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  segmentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  segmentCode: {
    fontWeight: '600',
  },
  segmentTime: {
    fontSize: 14,
  },
  segmentDate: {
    color: 'gray',
    fontSize: 12,
    marginBottom: 4,
  },
});

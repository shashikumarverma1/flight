// src/store/flightStore.js
import { create } from 'zustand';
import { flightList } from '../data/flights';

const useFlightStore = create((set) => ({
  searchParams: {
    origin: '',
    destination: '',
    date: '',
    passengers: 1,
    travelClass: 'economy',
  },
  setSearchParams: (params) => set({ searchParams: params }),

  flights:  flightList,
  setFlights: (flights) => set({ flights }),

  selectedFlight: null,
  setSelectedFlight: (flight) => set({ selectedFlight: flight }),

  clearStore: () =>
    set({
      searchParams: {
        origin: '',
        destination: '',
        date: '',
        passengers: 1,
        travelClass: 'economy',
      },
      flights: [],
      selectedFlight: null,
    }),
}));

export default useFlightStore;

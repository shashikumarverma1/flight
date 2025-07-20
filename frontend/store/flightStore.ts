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
  setSearchParams: (params:any) => set({ searchParams: params }),

  flights:  [],
  setFlights: (flights:any) => set({ flights }),

  selectedFlight: null,
  setSelectedFlight: (flight:any) => set({ selectedFlight: flight }),

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

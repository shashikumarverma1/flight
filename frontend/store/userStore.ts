import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const useFlightStore = create(
  persist(
    (set) => ({
      airports: [],
      loading: false,
      error: null,

      fetchAirports: async (query = 'new') => {
        set({ loading: true, error: null });

        try {
          const response = await axios.get(
            `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport`,
            {
              params: { query, locale: 'en-US' },
              headers: {
                'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
                'x-rapidapi-key': '36ad8205e7mshb95171a0879e5eap13ce94jsnf666e35a4b99',
              },
            }
          );

          set({ airports: response.data.data, loading: false });
        } catch (err) {
          set({
            error: err?.response?.data?.message || 'Something went wrong',
            loading: false,
          });
        }
      },
    }),
    {
      name: 'flight-store', // Key for localStorage or AsyncStorage
    }
  )
);

export default useFlightStore;

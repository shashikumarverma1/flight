// airportStore.js
import { create } from 'zustand';
import axios from 'axios';

const useAirportStore = create((set) => ({
  airports: [
  {
    "PlaceId": "NYCA-sky",
    "PlaceName": "New York",
    "CountryId": "US",
    "RegionId": "",
    "CityId": "NYC-sky",
    "CountryName": "United States"
  },
  {
    "PlaceId": "EWR-sky",
    "PlaceName": "Newark Liberty International",
    "CountryId": "US",
    "RegionId": "",
    "CityId": "EWR-sky",
    "CountryName": "United States"
  },
  {
    "PlaceId": "JFK-sky",
    "PlaceName": "John F. Kennedy International",
    "CountryId": "US",
    "RegionId": "",
    "CityId": "JFK-sky",
    "CountryName": "United States"
  },
  {
    "PlaceId": "LGA-sky",
    "PlaceName": "LaGuardia",
    "CountryId": "US",
    "RegionId": "",
    "CityId": "LGA-sky",
    "CountryName": "United States"
  }
]
,
  loading: false,
  error: null,

  searchAirport: async (query = 'new', locale = 'en-US') => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(
        'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
        {
          params: { query, locale },
          headers: {
            'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
            'x-rapidapi-key': '36ad8205e7mshb95171a0879e5eap13ce94jsnf666e35a4b99',
          },
        }
      );

      set({ airports: response.data, loading: false });
      console.log('✅ Airports:', response.data);
    } catch (error) {
      set({ error: 'Failed to fetch airport data', loading: false });
      console.error('❌ Airport Error:', error);
    }
  },
}));

export default useAirportStore;

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  Platform,
} from "react-native";
import { CustomDropDown } from "../components/customSearch";
import useAirportStore from "../store/airPortStore";
import useFlightStore from "../store/userStore";
import { flightList } from "../data/flights";

import axios from "axios";
import { Airports } from "../data/airports";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { LoadingScreen } from "./LoadingScreen";
import useUserStore from "../store/userStore";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type RootStackParamList = {
  Signup: undefined;
  Home: undefined;
}
type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Signup'>
}
export const Dashboard:React.FC<NavigationProps> = ({ navigation }) => {
  
  const { searchAirport } = useAirportStore();
  const { flights ,setFlights  } = useFlightStore();
  const {clearUser}=useUserStore()
 const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
const [loading , setLoading]=useState(false)


   const fetchFlights = async () => {
    navigation.navigate("FlightListScreen")
    setLoading(true);
    try {
      const response = await axios.get(
        'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights',
        {
          params: {
            originSkyId: from?.navigation?.relevantFlightParams?.skyId,
            destinationSkyId: to?.navigation?.relevantFlightParams?.skyId,
            originEntityId:from?.navigation?.entityId,
            destinationEntityId: to?.navigation?.entityId,
            date: date.toISOString().split("T")[0],
            cabinClass: 'economy',
            adults: '1',
            sortBy: 'best',
            currency: 'USD',
            market: 'en-US',
            countryCode: 'US',
          },
          headers: {
            'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
            'x-rapidapi-key': '36ad8205e7mshb95171a0879e5eap13ce94jsnf666e35a4b99',
          },
        }
      );

      console.log('API response:', response.data);
      setFlights(response.data.data.itinerary.legs)
   
  navigation.navigate("FlightListScreen")
    } catch (error) {
      console.error('Error fetching flights:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

    const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(false); 
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };
if(loading){
  return <LoadingScreen/>
}

  return (
    <ScrollView style={styles.container}>
          {
       show &&   <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
          minimumDate={new Date()} // cannot pick past date
        /> 
      }
      <Text style={styles.heading}>Search Flights</Text>

      <View style={styles.dropdownWrapper}>
        <Text style={styles.label}>From</Text>
        <CustomDropDown
          onSelect={setFrom}
          lable="Select from"
          selectedItem={from}
          data={Airports}
        />
      </View>

      <View style={styles.dropdownWrapper}>
        <Text style={styles.label}>To</Text>
        <CustomDropDown
          onSelect={setTo}
          lable="Select to"
          selectedItem={to}
          data={Airports}
        />
      </View>

       <View style={styles.dropdownWrapper}>
        <TouchableOpacity onPress={showDatePicker} style={styles.selectDate}>
 <Text style={[styles.label , ]}>Select Date</Text>
        </TouchableOpacity>
       
        <Text style={{ marginBottom: 10 }}>
        ✈️ Selected Date: { moment(date.toISOString().split("T")[0]).format("DD-MM-YYYY")}
      </Text>
      </View>

      <TouchableOpacity style={styles.searchBtn} onPress={fetchFlights}>
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>
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
    padding:5,
  
  },
  selectDate:{
    backgroundColor:'#cbd6dbff', 
    // padding:5,
    width:"35%",
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center',
    borderRadius:20
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

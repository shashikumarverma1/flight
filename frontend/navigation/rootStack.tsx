import { createStackNavigator } from '@react-navigation/stack';

import useUserStore from '../store/userStore';
import FlightDetailsScreen from '../screens/flightDetailsScreen';
import { FlightListScreen } from '../screens/flightListScreen.tsx';
import { Dashboard } from '../screens/dashboardScreen';
import BookNowScreen from '../screens/bookNowScreen';
import { Login, Signup } from '../screens';


const Stack = createStackNavigator();
export type RootStackParamList = {
  Dashboard: undefined;
  FlightDetailsScreen: { id: string };
  FlightListScreen:undefined;
  BookNowScreen:undefined
};
const RootStack :React.FC<RootStackParamList>=()=>{
  const { user } = useUserStore()

  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false }}>
      {user?.token ? (
        <>
          <Stack.Screen name="Home" component={Dashboard} />
          <Stack.Screen name="FlightDetailsScreen" component={FlightDetailsScreen} />
          <Stack.Screen name="FlightListScreen" component={FlightListScreen} />
          <Stack.Screen name="BookNowScreen" component={BookNowScreen} />

        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />

        </>
      )}
    </Stack.Navigator>
  );
}
export default RootStack;

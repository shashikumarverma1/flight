import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard, Login, Signup } from '../screens';
import useUserStore from '../store/userStore';
import FlightDetailsScreen from '../screens/flightDetails';


const Stack = createStackNavigator();

function RootStack() {
   const {user} = useUserStore()
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false }}>
      {true ? (
        <>
          <Stack.Screen name="Home" component={Dashboard} />
            <Stack.Screen name="FlightDetailsScreen" component={FlightDetailsScreen} />
          {/* flight */}
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

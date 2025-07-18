import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard, Login, Signup } from '../screens';


const Stack = createStackNavigator();

function RootStack({isAuthenticated} : {isAuthenticated :any}) {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false }}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Home" component={Dashboard} />
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

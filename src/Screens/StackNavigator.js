import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import OptionsScreen from "./OptionsScreen";
import useAuth from '../hooks/useAuth';
import { Colors } from "../helpers/colors";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();

  const navigatorOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: Colors.dark },
    cardStyleInterpolator: ({ current: { progress } }) => ({
      cardStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
          extrapolate: 'clamp',
        }),
      },
    }),
  };

  return (
    <Stack.Navigator screenOptions={navigatorOptions} mode="modal">
      {user ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Options" component={OptionsScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default StackNavigator

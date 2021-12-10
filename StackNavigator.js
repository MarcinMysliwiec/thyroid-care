import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import OptionsScreen from "./Screens/OptionsScreen";
import useAuth from './hooks/useAuth';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth()

  return (
    <Stack.Navigator>
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

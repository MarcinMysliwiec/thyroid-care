import React from 'react'
import { Text, View, Button } from 'react-native'
import useAuth from '../hooks/useAuth'

const OptionsScreen = () => {
  const { logout } = useAuth();

  return (
    <View>
      <Text>I am the options screen</Text>
      <Button title="Wyloguj" onPress={() => logout()} />
    </View>
  )
}

export default OptionsScreen

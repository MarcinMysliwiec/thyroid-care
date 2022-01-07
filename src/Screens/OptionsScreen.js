import React from 'react'
import { Text, View, Button } from 'react-native'
import useAuth from '../hooks/useAuth'
import { ContentWrapperWithMenu } from "../Components";

const OptionsScreen = () => {
  const { logout } = useAuth();

  return (
    <ContentWrapperWithMenu>
      <Text>I am the options screen</Text>
      <Button title="Wyloguj" onPress={() => logout()} />
    </ContentWrapperWithMenu>
  )
}

export default OptionsScreen

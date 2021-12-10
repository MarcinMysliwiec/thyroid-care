import React from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>I am the home screen</Text>
      <Button title="Opcje" onPress={() => navigation.navigate('Options')} />
    </View>
  )
}

export default HomeScreen

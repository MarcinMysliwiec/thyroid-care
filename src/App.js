import React, { useState } from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from "./Screens/StackNavigator";
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from './helpers/colors.js';

import AppLoading from 'expo-app-loading';

import { SettingsProvider } from './hooks/useSettings';
import { AuthProvider } from './hooks/useAuth';
import useFonts from './hooks/useFonts';


const App = () => {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {
        }}
      />
    );
  }

  return (
    <NavigationContainer theme={{ colors: { background: Colors.dark }}}>
      <StatusBar
        backgroundColor={Colors.dark}/>
      {/*
        HOC - Higher Order Component
        Pass everything to childrens
      */}
      <AuthProvider>
        <SettingsProvider>
          <SafeAreaProvider style={{ backgroundColor: Colors.dark }}>
            <StackNavigator/>
          </SafeAreaProvider>
        </SettingsProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

registerRootComponent(App);

import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from "./StackNavigator";
import { AuthProvider } from './hooks/useAuth';

import { LogBox } from 'react-native-web';
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      {/*
        HOC - Higher Order Component
        Pass everything to childrens
      */}
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

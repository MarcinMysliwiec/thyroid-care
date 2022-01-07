import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../helpers/colors.js';
import { SafeAreaView } from 'react-native-safe-area-context';


const ContentWrapper = props =>
  <SafeAreaView style={[styles.container, props.style, { backgroundColor: Colors.dark }]}>
    {props.children}
  </SafeAreaView>


export default ContentWrapper

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: Colors.dark,
  },
});

import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Text, View, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantScreen  from './src/features/restaurants/screens/restaurants.screen';
import RestaurantInfo  from './src/features/restaurants/components/restaurants-info.components';

const isAndroid = Platform.OS === 'android';


export default function App() {
  return (
  
      <>
       <RestaurantScreen /> 

      </>
   

    );
}

const styles = StyleSheet.create({});

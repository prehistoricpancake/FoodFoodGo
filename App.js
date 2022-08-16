import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Text, View, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantScreen  from './src/features/restaurants/screens/restaurants.screen';
import RestaurantInfo  from './src/features/restaurants/components/restaurants-info.components';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infra/index";

const isAndroid = Platform.OS === 'android';


export default function App() {
  return (
  
      <>
      <ThemeProvider theme={theme}>
      <RestaurantScreen /> 

      </ThemeProvider>

      </>
   

    );
}

const styles = StyleSheet.create({});

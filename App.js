import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Text, View, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantScreen  from './src/features/restaurants/screens/restaurants.screen';
import RestaurantInfo  from './src/features/restaurants/components/restaurants-info-card.components';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infra/theme/index';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [ oswaldLoaded ] = useOswald({
    Oswald_400Regular
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded){
    return null;
  }

  return (
  
      <>
      <ThemeProvider theme={theme}>
      <RestaurantScreen /> 

      </ThemeProvider>

      </>
   

    );
}

const styles = StyleSheet.create({});

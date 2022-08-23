import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Text, View, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantScreen  from './src/features/restaurants/screens/restaurants.screen';
import { SafeArea } from "./src/utils/safe-area.component";
import RestaurantInfo  from './src/features/restaurants/components/restaurants-info-card.components';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infra/theme/index';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";


const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
)

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
)



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
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Restaurants" component={RestaurantScreen} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name= "Settings" component={Settings}/>
        </Tab.Navigator>
      </NavigationContainer>
      </ThemeProvider>

      </>
   

    );
}

const styles = StyleSheet.create({});

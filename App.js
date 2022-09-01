import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { initializeApp } from "firebase/app";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/screens/restaurants.screen";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

const firebaseConfig = {
  apiKey: "AIzaSyCHjPjND0336BVTpKCpkbgrG0hglOuwwZ0",
  authDomain: "foodfoodgo.firebaseapp.com",
  projectId: "foodfoodgo",
  storageBucket: "foodfoodgo.appspot.com",
  messagingSenderId: "67845333472",
  appId: "1:67845333472:web:2a27ca2cd9c2f0df748b85"
};

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
        <LocationContextProvider>
        <RestaurantsContextProvider>
         <Navigation />
        </RestaurantsContextProvider>
        </LocationContextProvider>
        </FavouritesContextProvider> 
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { initializeApp } from "@firebase/app";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
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
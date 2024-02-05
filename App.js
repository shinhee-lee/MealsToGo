import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  FBAPIKEY,
  FBAUTHDOMAIN,
  FBPROJECTID,
  FBSTORAGEBUCKET,
  FBMESSAGINGSENDERID,
  FBAPPID,
} from "@env";

import { RestaurantsContextProvider } from "./src/services/restaurants/RestaurantsContext";
import { LocationContextProvider } from "./src/services/location/LocationContext";
import { FavouritesContextProvider } from "./src/services/favourites/FavouritesContext";
import { Navigation } from "./src/infrastructure/navigation";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: FBAPIKEY,
  authDomain: FBAUTHDOMAIN,
  projectId: FBPROJECTID,
  storageBucket: FBSTORAGEBUCKET,
  messagingSenderId: FBMESSAGINGSENDERID,
  appId: FBAPPID,
};

const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      const auth = getAuth();
      // createUserWithEmailAndPassword(auth, "email@sini.com", "password")
      signInWithEmailAndPassword(auth, "email@sini.com", "password")
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) return null;

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

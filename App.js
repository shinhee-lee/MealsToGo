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

import { AuthenticationContextProvider } from "./src/services/authentication/AuthenticationContext";
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
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

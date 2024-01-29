import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantsScreen";
import { RestaurantsContextProvider } from "./src/services/restaurants/RestaurantsCotext";
import { LocationContextProvider } from "./src/services/location/LocationContext";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { SafeArea } from "./src/components/utility/SafeAreaComponent";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

// const tabBarIcon = () => {
//   <Ionicons name={iconName} size={size} color={color} />;
// };
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              {/* <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{
                  activeTintColor: "tomato",
                  inactiveTintColor: "gray",
                }}
              > */}
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen
                  name="Restaurants"
                  component={RestaurantsScreen}
                  options={{ headerShown: false }}
                />
                <Tab.Screen
                  name="Map"
                  component={Map}
                  options={{ headerShown: false }}
                />
                <Tab.Screen
                  name="Settings"
                  component={Settings}
                  options={{ headerShown: false }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

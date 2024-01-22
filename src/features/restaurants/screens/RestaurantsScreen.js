import React from "react";
import { View, SafeAreaView, Platform, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.CurrentHeight}px`};
`;
const SearchContainer = styled(View)`
  padding: 16px;
`;
const RestaurantListConainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListConainer>
      <RestaurantInfoCard />
    </RestaurantListConainer>
  </SafeArea>
);

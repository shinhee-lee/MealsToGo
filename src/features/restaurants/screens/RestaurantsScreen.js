import React from "react";
import { View, SafeAreaView, Platform, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

// paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
// ${StatusBar.currentHeight && `margin-top: ${StatusBar.CurrentHeight}px`};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${Platform.OS === "android" && `margin-top:${StatusBar.currentHeight}px`}
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantListConainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
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

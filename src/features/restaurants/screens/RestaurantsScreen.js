import React from "react";
import {
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCardComponent } from "../components/RestaurantInfoCardComponent";
import { Spacer } from "../../../components/spacer/SpacerComponent";

// paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
// ${StatusBar.currentHeight && `margin-top: ${StatusBar.CurrentHeight}px`};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${Platform.OS === "android" && `margin-top:${StatusBar.currentHeight}px`}
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
      ]}
      renderItem={() => (
        <>
          <Spacer position="bottom" size="large">
            <RestaurantInfoCardComponent />
          </Spacer>
        </>
      )}
      keyExtractor={(item) => item.name}
    />
    {/* <RestaurantInfoCardComponent /> */}
  </SafeArea>
);

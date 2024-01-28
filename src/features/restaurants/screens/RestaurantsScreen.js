import React from "react";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCardComponent } from "../components/RestaurantInfoCardComponent";
import { Spacer } from "../../../components/spacer/SpacerComponent";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";

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

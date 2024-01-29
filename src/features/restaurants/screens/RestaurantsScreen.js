import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCardComponent } from "../components/RestaurantInfoCardComponent";
import { Spacer } from "../../../components/spacer/SpacerComponent";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsCotext";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCardComponent restaurant={item} />
              </Spacer>
            </>
          );
        }}
        keyExtractor={(item) => item.name}
      />
      {/* <RestaurantInfoCardComponent /> */}
    </SafeArea>
  );
};

import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/SafeAreaComponent";
import { Text } from "../../../components/typography/TextComponent";
import { Spacer } from "../../../components/spacer/SpacerComponent";

import { RestaurantList } from "../../restaurants/components/RestaurantListStyles";
import { RestaurantInfoCardComponent } from "../../restaurants/components/RestaurantInfoCardComponent";
import { FavouritesContext } from "../../../services/favourites/FavouritesContext";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCardComponent restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};

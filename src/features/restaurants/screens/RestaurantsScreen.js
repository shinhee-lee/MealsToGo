import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCardComponent } from "../components/RestaurantInfoCardComponent";
import { Spacer } from "../../../components/spacer/SpacerComponent";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsContext";
import { Search } from "../components/SearchComponent";
import { FavouritesBar } from "../../../components/favourites/FavouritesBarComponents";
import { FavouritesContext } from "../../../services/favourites/FavouritesContext";
import { RestaurantList } from "../components/RestaurantListStyles";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.red800} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />

      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      <RestaurantList
        data={restaurants}
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
      {/* <RestaurantInfoCardComponent /> */}
    </SafeArea>
  );
};

import React from "react";

import { RestaurantInfoCardComponent } from "../components/RestaurantInfoCardComponent";

import { SafeArea } from "../../../components/utility/SafeAreaComponent";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCardComponent restaurant={restaurant} />
    </SafeArea>
  );
};

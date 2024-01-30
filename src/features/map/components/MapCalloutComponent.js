import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/CompactRestaurantInfoComponent";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoriteScreen from "../Screens/Favorites";

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
}

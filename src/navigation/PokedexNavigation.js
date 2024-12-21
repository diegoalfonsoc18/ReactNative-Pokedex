import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import PokedexScreen from "../Screens/Pokedex";
import PokemonScreen from "../Screens/Pokemon";

const Stack = createNativeStackNavigator();
export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: "Pokedex" }} // Añadido título para la pantalla Pokedex
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: "Pokemon" }} // Añadido título para la pantalla Pokemon
      />
    </Stack.Navigator>
  );
}

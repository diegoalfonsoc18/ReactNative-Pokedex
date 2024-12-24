import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import PokedexScreen from "../Screens/Pokedex";
import PokemonScreen from "../Screens/Pokemon";

const Stack = createNativeStackNavigator();
export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: "Pokemon", headerShown: false }} // Añadido título para la pantalla Pokemon
      />
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: "Pokedex", headerShown: false }} // Añadido título para la pantalla Pokedex
      />
    </Stack.Navigator>
  );
}

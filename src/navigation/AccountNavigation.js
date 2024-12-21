import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AccountScreen from "../Screens/Account";

const Stack = createNativeStackNavigator();
export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Mi Cuenta",
        }}
      />
    </Stack.Navigator>
  );
}

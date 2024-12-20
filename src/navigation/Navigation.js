import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default class Navigation extends Component {
  render() {
    return <Tab.Navigator>
        <Tab.Screen name="" component={} />
    </Tab.Navigator>;
  }
}

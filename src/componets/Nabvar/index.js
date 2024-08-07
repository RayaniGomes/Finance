import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Welcome from '../pages/Welcome';
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <TabNavigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Home" component={Home} />
        </TabNavigator>
    )
}
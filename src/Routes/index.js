import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import NovaConta from "../pages/NovaConta";
import NovaDespesa from "../pages/NovaDespesa";
import { cores } from "../components/Cores";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();
function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: cores.pink,
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: cores.azulMedio,
                    
                }
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: "home",
                }}
            />
            <Tab.Screen
                name='NovaConta'
                component={NovaConta}
                options={{
                    tabBarIcon: "trending-up",
                }}
            />
            <Tab.Screen
                name='NovaDespesa'
                component={NovaDespesa}
                options={{
                    tabBarIcon: "trending-down",
                }}
            />

        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();
function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}

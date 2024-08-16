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
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
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
                },
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tab.Screen
                name='Home'
                options={{ tabBarIcon: "home" }}
            >
                {() => (
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                )}
            </Tab.Screen>
            <Tab.Screen
                name='NovaConta'
                options={{ tabBarIcon: "trending-up" }}
            >
                {() => (
                    <PrivateRoute>
                        <NovaConta />
                    </PrivateRoute>
                )}
            </Tab.Screen>
            <Tab.Screen
                name='NovaDespesa'
                options={{ tabBarIcon: "trending-down" }}
            >
                {() => (
                    <PrivateRoute>
                        <NovaDespesa />
                    </PrivateRoute>
                )}
            </Tab.Screen>
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
                options={{ headerShown: false }}
            >
                {() => (
                    <PrivateRoute>
                        <TabNavigator />
                    </PrivateRoute>
                )}
            </Stack.Screen>
            <Stack.Screen
                name="NovaConta"
                options={{ headerShown: false }}
            >
                {() => (
                    <PrivateRoute>
                        <NovaConta />
                    </PrivateRoute>
                )}
            </Stack.Screen>
            <Stack.Screen
                name="NovaDespesa"
                options={{ headerShown: false }}
            >
                {() => (
                    <PrivateRoute>
                        <NovaDespesa />
                    </PrivateRoute>
                )}
            </Stack.Screen>
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

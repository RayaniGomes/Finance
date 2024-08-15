import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import NovaConta from "../pages/NovaConta";
import NovaDespesa from "../pages/NovaDespesa";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Home"
                options={{headerShown: false}}
            >
                {() => (
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                )}
            </Stack.Screen>

            <Stack.Screen
                name="NovaConta"
                options={{headerShown: false}}
            >
                {() => (
                    <PrivateRoute>
                        <NovaConta />
                    </PrivateRoute>
                )}
            </Stack.Screen>

            <Stack.Screen
                name="NovaDespesa"
                options={{headerShown: false}}
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

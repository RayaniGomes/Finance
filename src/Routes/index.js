import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import NovaConta from "../pages/NovaConta";
import NovaDespesa from "../pages/NovaDespesa";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen 
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
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="NovaConta"
                component={NovaConta}
                options={{headerShown: false}}
            /> */}
            <Stack.Screen 
                name="NovaDespesa"
                component={NovaDespesa}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
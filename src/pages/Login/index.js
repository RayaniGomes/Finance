import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { style } from "./style";
import { cores } from "../../components/Cores";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            const response = await api.post(`/auth/login`, null, {
                params: {
                    email: email,
                    password: password
                }
            });

            if(response.status === 200) {
                const { token, user } = response.data;
                await AsyncStorage.setItem('token', token);
                await AsyncStorage.setItem('user', JSON.stringify(user));

                // Navigate to Home screen
                navigation.navigate('Home');
            } else {
                Alert.alert('Erro', 'E-mail ou senha inválidos');
            }
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login');
        }
    };

    return (
        <View style={style.container}>
            <Image source={require('../../../assets/image/backgroundLogin.png')} />
            <View style={style.containerBody}>
                <Image source={require('../../../assets/image/logoPequena.png')} />
                <View style={style.containerLogin}>
                    <View style={style.containerInput}>
                        <Text style={style.inputText}>E-mail:</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Seu e-mail"
                            placeholderTextColor="#D9D9D94D"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Text style={style.inputText}>Senha:</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Sua senha"
                            placeholderTextColor="#D9D9D94D"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>
                    <View style={style.containerButtons}>
                        <TouchableOpacity onPress={handleLogin}>
                            <LinearGradient
                                colors={[cores.pink, cores.laranja]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={style.button}
                            >
                                <Text style={style.buttonText}>Login</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={style.containerRegistrar}
                    onPress={() => navigation.navigate('Cadastro')}
                >
                    <Text style={style.registrarText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

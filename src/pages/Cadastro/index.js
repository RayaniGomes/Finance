import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { style } from "../Login/style";
import { cores } from "../../components/Cores";

export default function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleRegister = async () => {
        try {
            const response = await api.post('/auth/register', {
                name,
                email,
                password,
            });

            if (response.status !== 200) {
                Alert.alert('Erro', 'Status: ' + response.status);
                return;
            } else {
                Alert.alert('Sucesso', 'Cadastro realizado com sucesso.');
                navigation.navigate('Login');
            }
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível realizar o cadastro. Tente novamente.');
        }
    };

    return (
        <SafeAreaView style={style.safeAreaContainer}>
            <ScrollView contentContainerStyle={style.scrollViewContent}>
                <ImageBackground
                    source={require('.../../../assets/image/backgroundLogin.png')}
                    style={style.background}
                >
                    <View style={style.containerBody}>
                        <Image source={require('../../../assets/image/logoPequena.png')} />
                        <View style={style.containerInput}>
                            <Text style={style.inputText}>Nome:</Text>
                            <TextInput
                                style={style.input}
                                placeholder="Seu e-mail"
                                placeholderTextColor="#D9D9D94D"
                                value={name}
                                onChangeText={setName}
                            />
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
                            <TouchableOpacity onPress={handleRegister}>
                                <LinearGradient
                                    colors={[cores.pink, cores.laranja]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={style.button}
                                >
                                    <Text style={style.buttonText}>Cadastre-se</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

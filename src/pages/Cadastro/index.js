import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';

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
        <View style={style.container}>
            <Image source={require('../../../assets/image/backgroundLogin.png')} />
            <View style={style.containerBody}>
                <Image source={require('../../../assets/image/logoPequena.png')} />
                <View style={style.containerLogin}>
                    <View style={style.containerInput}>
                        <Text style={style.inputText}>Nome:</Text>
                        <TextInput style={style.input} value={name} onChangeText={setName} />
                        <Text style={style.inputText}>E-mail:</Text>
                        <TextInput style={style.input} value={email} onChangeText={setEmail} />
                        <Text style={style.inputText}>Senha:</Text>
                        <TextInput style={style.input} value={password} onChangeText={setPassword} secureTextEntry />
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
            </View>
        </View>
    );
}

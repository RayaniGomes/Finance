import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { cores } from "../../componets/Cores";
import { style } from "./style";

export default function Login() {
    const navigation = useNavigation();
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
                            />
                        <Text style={style.inputText}>Senha:</Text>
                        <TextInput 
                            style={style.input}
                            placeholder="Sua senha"
                            placeholderTextColor="#D9D9D94D"
                        />
                    </View>
                    <View style={style.containerButtons}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
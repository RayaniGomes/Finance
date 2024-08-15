import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { style } from "../Login/style";
import { cores } from "../../components/Cores";

export default function Login() {
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView style={style.safeAreaContainer}>
            <ScrollView contentContainerStyle={style.scrollViewContent}>
                <ImageBackground
                    source={require('.../../../assets/image/backgroundLogin.png')}
                    style={style.background}
                >
                    <View style={style.containerBody}>
                        <Image source={require('../../../assets/image/logoPequena.png')} />
                        <View style={style.containerLogin}>
                            <View style={style.containerInput}>
                                <Text style={style.inputText}>Nome:</Text>
                                <TextInput
                                    style={style.input}
                                    placeholder="Seu e-mail"
                                    placeholderTextColor="#D9D9D94D"
                                />
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
                                    secureTextEntry={true}
                                    onChangeText={(text) => setPassword(text)}
                                    value={password}
                                />
                            </View>
                            <View style={style.containerButtons}>
                                <TouchableOpacity>
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
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}
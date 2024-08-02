import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

import { style } from "../../Styles/styleLogin";

export default function Login() {
    return (
        <View style={style.container}>
            <Image source={require('../../../assets/backgroundLogin.png')} />
            <View style={style.containerBody}>
                <Image source={require('../../../assets/logoPequena.png')} />
                <View style={style.containerLogin}>
                    <View style={style.containerInput}>
                        <Text style={style.inputText}>Nome:</Text>
                        <TextInput style={style.input} />
                        <Text style={style.inputText}>E-mail:</Text>
                        <TextInput style={style.input} />
                        <Text style={style.inputText}>Senha:</Text>
                        <TextInput style={style.input} />
                    </View>
                    <View style={style.containerButtons}>
                        <TouchableOpacity>
                            <LinearGradient
                                colors={['#FA1160', '#F87A30']}
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
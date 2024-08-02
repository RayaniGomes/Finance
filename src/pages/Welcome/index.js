import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

import { style } from "../../Styles/styleWelcome";

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <Image source={require('../../../assets/background.png')} />
            <View style={style.containerBody}>
                <View style={style.containerLogo}>
                    <Image
                        source={require('../../../assets/logo.png')}
                        style={{ width: '100%' }}
                        resizeMode="contain"
                    />
                </View>
                <View style={style.containerButtons}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <LinearGradient
                            colors={['#FA1160', '#F87A30']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={style.button}
                        >
                            <Text style={style.buttonText}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <LinearGradient
                            colors={['#FA1160', '#F87A30']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={style.button}
                        >
                            <Text style={style.buttonText}>Cadastro</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


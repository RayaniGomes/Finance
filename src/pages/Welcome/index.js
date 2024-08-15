import React from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { cores } from "../../components/Cores";
import { style } from "./style";

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
             <ImageBackground
                    source={require('../../../assets/image/backgroundLogin.png')}
                    style={style.background}
                >
                <View style={style.containerBody}>
                    <View style={style.containerLogo}>
                        <Image
                            source={require('../../../assets/image/logo.png')}
                            style={{ width: '100%' }}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={style.containerButtons}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <LinearGradient
                                colors={[cores.pink, cores.laranja]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={style.button}
                            >
                                <Text style={style.buttonText}>Login</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                            <LinearGradient
                                colors={[cores.pink, cores.laranja]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={style.button}
                            >
                                <Text style={style.buttonText}>Cadastro</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}


import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { cores } from "../Cores";


export default function Header({ nome }) {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
                <Image 
                    source={require('../../../assets/image/arrowButton.png')} 
                    style={{width: 30, height: 30}} 
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <Text style={style.nome}>{nome}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: cores.azulMedio,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 32,
    },

    nome: {
        fontSize: 18,
        fontWeight: '400',
        color: cores.branco,
        marginLeft: 16,
    },
})
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { cores } from "../Cores";

export default function Header({ nome }) {
    return (
        <View style={style.containerNome}>
            <Text style={style.ola}>Olá,</Text>
            <Text style={style.nome}>{nome}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    containerNome: {
        backgroundColor: cores.azulMedio,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 32,
    },

    ola: {
        fontSize: 12,
        fontWeight: '300',
        color: cores.branco,
    },

    nome: {
        fontSize: 16,
        fontWeight: '500',
        color: cores.branco,
    },
})
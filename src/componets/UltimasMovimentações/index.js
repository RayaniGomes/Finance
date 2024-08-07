import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { cores } from '../Cores';

export default function Movimentacao({ data }) {
    return (
        <View style={style.container} >
            <View style={style.diaNome}>
                <Text style={style.dia}>{data.dia}</Text>
                <Text style={style.dia}>{data.parcela}</Text>
                <Text style={style.dia}>{data.nome}</Text>
            </View>
            <View >
                <Text style={data.type === 1 ? style.entrada : style.saida}>{data.type === 1 ? `R$ ${data.valor}` : `R$ -${data.valor}`}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: cores.branco,
    },

    diaNome: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    dia: {
        fontSize: 12,
        fontWeight: '700',
        color: cores.branco,
        marginEnd: 16,
    },

    entrada: {
        fontSize: 12,
        fontWeight: '700',
        color: cores.verde,
    },
    
    saida: {
        fontSize: 12,
        fontWeight: '700',
        color: cores.vermelho,
    }
})
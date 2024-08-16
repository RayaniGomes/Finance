import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { cores } from '../Cores';

export default function Movimentacao({ data }) {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    };

    // Verifica se data.amount é um número e não é NaN
    const getAmount = () => {
        const amount = parseFloat(data.amount);
        return isNaN(amount) ? 0 : amount;
    };

    return (
        <View style={style.container} >
            <View style={style.diaNome}>
                <Text style={style.dia}>{formatDate(data.date)}</Text>
                <Text style={style.dia}>{data.description}</Text>
            </View>
            <View >
                <Text style={getAmount() >= 0 ? style.entrada : style.saida}>
                    {`R$ ${getAmount().toFixed(2)}`}
                </Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
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
});

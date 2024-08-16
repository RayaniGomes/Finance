import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { cores } from '../Cores';

export default function Contas({ data }) {
    const getFormattedBalance = () => {
        const balance = parseFloat(data.balance);
        return isNaN(balance) ? 0 : balance.toFixed(2);
    };

    return (
        <View style={styles.conta}>
            <View style={styles.iconNomeTipo}>
                <View>
                    <Text style={styles.nomeBanco}>{data.bank}</Text>
                    <Text style={styles.tipoConta}>{data.accountType}</Text>
                </View>
            </View>
            <View style={styles.valorEdite}>
                <Text style={styles.valor}>R$ {getFormattedBalance()}</Text>
                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/image/lapis.png')}
                        style={styles.editIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    conta: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 5,
        marginBottom: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: cores.branco,
    },

    iconNomeTipo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    nomeBanco: {
        fontSize: 12,
        fontWeight: '600',
        color: cores.branco,
        paddingLeft: 10,
    },

    tipoConta: {
        fontSize: 10,
        fontWeight: '400',
        color: cores.branco,
        paddingLeft: 10,
    },

    valorEdite: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    valor: {
        fontSize: 14,
        fontWeight: '700',
        color: cores.branco,
        paddingRight: 10,
    },

    editIcon: {
        width: 10,
        height: 20
    }
});

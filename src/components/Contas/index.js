import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { cores } from '../Cores';

export default function Contas({ data }) {
    return (
        <View style={style.conta}>
            <View style={style.iconNomeTipo}>
                {/*<Image source={require('../../../assets/image/bancosIcons/caixa.png')} resizeMode="cover" />*/}
                <View>
                    <Text style={style.nomeBanco}>{data.bank}</Text>
                    <Text style={style.tipoConta}>{data.accountType}</Text>
                </View>
            </View>
            <View style={style.valorEdite}>
                <Text style={style.valor}>R$ {data.balance.toFixed(2)}</Text>
                <TouchableOpacity >
                    <Image
                        source={require('../../../assets/image/lapis.png')}
                        style={{ width: 10, height: 20 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
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
    }
})

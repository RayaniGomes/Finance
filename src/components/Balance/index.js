import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { cores } from '../Cores';

export default function Balace({ label, value }) {
    const [showValue, setShowValue] = useState(false);

    return (
        <View >
            <View>
                <Text style={style.label}>{label}</Text>
                <LinearGradient
                    colors={[cores.pink, cores.laranja]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={style.saldo}
                >
                    <TouchableOpacity onPress={() => setShowValue(!showValue)}>
                        {showValue ? (
                            <Text style={style.saldoText}>R$ {value}</Text>
                        ) : (
                            <Image source={require('../../../assets/image/olho.png')} style={style.verValor} />
                        )}
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    label: {
        fontSize: 14,
        fontWeight: '300',
        color: cores.branco,
    },

    saldo: {
        width: 150,
        height: 54,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    saldoText: {
        fontSize: 20,
        fontWeight: '400',
        color: cores.branco,
    },

    verValor: {
        width: 30,
        height: 30,
    }
})
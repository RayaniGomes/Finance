import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles  } from './style';
import { cores } from '../../components/Cores';
import Header from '../../components/Header';
import Bancos from '../../components/Bancos';
import TipoConta from '../../components/TipoConta';

export default function NovaConta() {
    const [valorFormatado, setValorFormatado] = useState('');

    const formatarValor = (valor) => {
        const valorNumerico = parseFloat(valor.replace('.', '').replace(',', '.'));
        return Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(isNaN(valorNumerico) ? 0 : valorNumerico);
    };

    const handleValorChange = (text) => {
        const valorNumerico = text.replace(/\D/g, '');
        const valorComVirgula = (valorNumerico / 100).toFixed(2).replace('.', ',');
        setValorFormatado(formatarValor(valorComVirgula));
    };

    return (
        <View style={styles.container}>
            <Header nome={'Nova conta'} />
            <Bancos />
            <TipoConta />

            <View style={styles.containerForms}>
                <Text style={styles.label}>Valor em conta</Text>
                <TextInput
                    style={styles.input}
                    placeholder="R$ 00,00"
                    placeholderTextColor={cores.branco}
                    placeholderStyle={{ fontSize: 14, fontWeight: '400' }}
                    keyboardType='number-pad'
                    onChangeText={handleValorChange}
                    value={valorFormatado}
                />
            </View>
            <View style={styles.containerForms}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Coloque a sua descrição..."
                    placeholderTextColor={cores.branco}
                    placeholderStyle={{ fontSize: 14, fontWeight: '400' }}
                />
            </View>
            <TouchableOpacity style={styles.containerButtons}>
                <LinearGradient
                    colors={[cores.pink, cores.laranja]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Salvar</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

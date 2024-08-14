import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInputMask } from 'react-native-masked-text';
import { RadioButton, Text as PaperText } from 'react-native-paper';

import { styles } from './style';
import { cores } from '../../components/Cores';
import Header from '../../components/Header';



export default function NovaDespesa() {
    const [valorFormatado, setValorFormatado] = useState('');
    const [date, setDate] = useState('');
    const [customMaskedValue, setCustomMaskedValue] = useState('');
    const [checked, setChecked] = useState('sim');

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
            <Header nome={'Nova despesa'} />

            <View style={styles.containerForms}>
                <Text style={styles.label}>Valor da despesa</Text>
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: "45%" }}>
                        <Text style={styles.label}>Data</Text>
                        <TextInputMask
                            style={styles.input}
                            type={'datetime'}
                            options={{
                                format: 'DD/MM/YYYY'
                            }}
                            placeholder="DD/MM/AAAA"
                            placeholderTextColor={cores.branco}
                            value={date}
                            keyboardType='number-pad'
                            onChangeText={setDate}
                        />
                    </View>
                    <View style={{ width: "45%" }}>
                        <Text style={styles.label}>Parcelas</Text>
                        <TextInputMask
                            style={styles.input}
                            type={'custom'}
                            options={{
                                mask: 'x99999'
                            }}
                            placeholder="x1"
                            placeholderTextColor={cores.branco}
                            keyboardType='number-pad'
                            value={customMaskedValue}
                            onChangeText={setCustomMaskedValue}
                        />
                    </View>
                </View>
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

            <View style={styles.containerForms}>
                <Text style={styles.label}>Despesa fixa?</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginEnd: 16 }}>
                        <RadioButton
                            value="sim"
                            status={checked === 'sim' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('sim')}
                            color={cores.branco}
                        />
                        <PaperText style={styles.label}>Sim</PaperText>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            value="não"
                            status={checked === 'não' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('não')}
                            color={cores.branco}
                        />
                        <PaperText style={styles.label}>Não</PaperText>
                    </View>
                </View>
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

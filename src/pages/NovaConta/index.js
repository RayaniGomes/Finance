import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { styles } from './style';
import { cores } from '../../components/Cores';
import Header from '../../components/Header';
import Bancos from '../../components/Bancos';
import TipoConta from '../../components/TipoConta';
import { useNavigation } from '@react-navigation/native';

export default function NovaConta() {
    const [valorFormatado, setValorFormatado] = useState('');
    const [descricao, setDescricao] = useState('');
    const [banco, setBanco] = useState(null);
    const [tipoConta, setTipoConta] = useState(null);
    const navigation = useNavigation();

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

    const handleSave = async () => {
        if (!banco || !tipoConta) {
            Alert.alert('Erro', 'Por favor, selecione o banco e o tipo de conta.');
            return;
        }

        try {
            const userData = await AsyncStorage.getItem('user');
            const parsedUser = JSON.parse(userData);

            const balance = parseFloat(valorFormatado.replace('R$', '').replace(',', '.').trim());

            const response = await api.post('/accounts', {
                bank: banco,
                accountType: tipoConta,
                balance: balance,
                description: descricao,
                userId: parsedUser.id
            });

            if (response.status === 200) {
                Alert.alert('Sucesso', 'Conta criada com sucesso!');
                navigation.goBack();
            } else {
                Alert.alert('Erro', 'Não foi possível criar a conta. Tente novamente.');
            }
        } catch (error) {
            Alert.alert('Erro', `Erro ao criar a conta: ${error.message}`);
        }
    };

    return (
        <View style={styles.container}>
            <Header nome={'Nova conta'} />
            <Bancos onSelectBanco={setBanco} selectedBanco={banco} />
            <TipoConta onSelectTipoConta={setTipoConta} selectedTipoConta={tipoConta} />

            <View style={styles.containerForms}>
                <Text style={styles.label}>Valor em conta</Text>
                <TextInput
                    style={styles.input}
                    placeholder="R$ 00,00"
                    placeholderTextColor={cores.branco}
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
                    onChangeText={setDescricao}
                    value={descricao}
                />
            </View>
            <TouchableOpacity style={styles.containerButtons} onPress={handleSave}>
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

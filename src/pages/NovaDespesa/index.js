import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInputMask } from 'react-native-masked-text';
import { RadioButton, Text as PaperText } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { styles } from './style';
import { cores } from '../../components/Cores';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

export default function NovaDespesa() {
    const [valorFormatado, setValorFormatado] = useState('');
    const [date, setDate] = useState('');
    const [parcelas, setParcelas] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isFixed, setIsFixed] = useState(true);
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
        try {
            const userData = await AsyncStorage.getItem('user');
            const parsedUser = JSON.parse(userData);

            const amount = parseFloat(valorFormatado.replace('R$', '').replace(',', '.').trim());

            const response = await api.post('/expenses', {
                amount: amount,
                description: descricao,
                isFixed: isFixed,
                date: new Date(date.split('/').reverse().join('-')),
                userId: parsedUser.id
            });

            if (response.status === 200) {
                Alert.alert('Sucesso', 'Despesa criada com sucesso!');
                navigation.goBack(); // Volta para a tela anterior (Home), o que acionará o useFocusEffect na Home para recarregar os dados
            } else {
                Alert.alert('Erro', 'Não foi possível criar a despesa. Tente novamente.');
            }
        } catch (error) {
            Alert.alert('Erro', `Erro ao criar a despesa: ${error.message}`);
        }
    };

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
                                value={parcelas}
                                onChangeText={setParcelas}
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
                        onChangeText={setDescricao}
                        value={descricao}
                    />
                </View>
                {/* <View style={styles.containerForms}>
                    <Text style={styles.label}>Despesa fixa?</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginEnd: 16 }}>
                            <RadioButton
                                value="sim"
                                status={isFixed === 'sim' ? 'checked' : 'unchecked'}
                                onPress={() => setIsFixed(true)}
                                color={cores.branco}
                            />
                            <PaperText style={styles.label}>Sim</PaperText>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="não"
                                status={!isFixed ? 'checked' : 'unchecked'}
                                onPress={() => setIsFixed(false)}
                                color={cores.branco}
                            />
                            <PaperText style={styles.label}>Não</PaperText>
                        </View>
                    </View>
                </View> */}

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
            </ScrollView>
        </SafeAreaView>
    );
}

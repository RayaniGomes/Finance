import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderHome from "../../components/HeaderHome";
import Balance from "../../components/Balance";
import Contas from "../../components/Contas";
import UltimasMovimentacoes from "../../components/UltimasMovimentações";
import { styles } from "./style";

const bancosIcons = '../../../assets/image/bancosIcons/';
const listContas = [
    {
        id: 1,
        image: require(`${bancosIcons}caixa.png`),
        nome: 'caixa',
        tipo: 'Conta corrente',
        valor: '300,00',
    },
    {
        id: 2,
        image: require(`${bancosIcons}caixa.png`),
        nome: 'caixa',
        tipo: 'Conta poupança',
        valor: '5000,00',
    },
];

const listDespesas = [
    {
        id: 1,
        dia: '05/01',
        nome: 'Padaria',
        parcela: '1/1',
        valor: '5,00',
        type: 0, // 0 = despesas
    },
    {
        id: 2,
        dia: '05/01',
        nome: 'Fotolivro',
        parcela: '1/1',
        valor: '150,00',
        type: 1, // 1 = entrada
    },
    {
        id: 3,
        dia: '05/01',
        nome: 'Shoppe',
        parcela: '2/3',
        valor: '80,00',
        type: 0,
    },
    {
        id: 4,
        dia: '05/01',
        nome: 'Salário',
        parcela: '1/1',
        valor: '350,00',
        type: 1,
    },
    {
        id: 5,
        dia: '05/01',
        nome: 'Padaria',
        parcela: '1/1',
        valor: '5,00',
        type: 0,
    },
    {
        id: 6,
        dia: '05/01',
        nome: 'Padaria',
        parcela: '1/1',
        valor: '5,00',
        type: 0,
    },
];

export default function Home() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <HeaderHome nome="Nome do usuário" />

                <View style={styles.balance}>
                    <Balance label='Saldo' value="1.000,00" />
                    <Balance label='Despesas' value="500,00" />
                </View>
                
                <View style={styles.sessao}>
                    <View style={styles.containerLegenda}>
                        <Text style={styles.title}>Contas</Text>
                    </View>
                    <FlatList
                        data={listContas}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => <Contas data={item} />}
                        contentContainerStyle={styles.list}
                    />
                </View>

                <View style={styles.sessao}>
                    <View style={styles.containerLegenda}>
                        <Text style={styles.title}>Despesas</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('NovaDespesa')}>
                            <Image source={require('../../../assets/image/mais.png')} />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={listDespesas}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => <UltimasMovimentacoes data={item} />}
                        contentContainerStyle={styles.list}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

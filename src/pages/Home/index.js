import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { style } from "./style";
import HeaderHome from "../../components/HeaderHome";
import Balace from "../../components/Balace";
import Contas from "../../components/Contas";
import UltimasMovimentacoes from "../../components/UltimasMovimentações"

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
        tipo: 'Conta poulpança',
        valor: '5000,00',
    },
]

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
        valor: '150,0',
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
        nome: 'Salario',
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

]

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={style.container} >

            <HeaderHome nome="Nome do usuário" />

            <Balace saldo="1.000,00" despesas="500,00" />

            <View style={style.sessao}>
                <View style={style.containerLegenda}>
                    <Text style={style.title}>Contas</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('NovaConta')}>
                        <Image source={require('../../../assets/image/mais.png')} />
                    </TouchableOpacity>
                </View>
                <View style={style.list}>
                    <FlatList
                        data={listContas}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => <Contas data={item} />}
                    />
                </View>
            </View>

            <View style={style.sessao}>

                <View style={style.containerLegenda}>
                    <Text style={style.title}>Despesas</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('NovaDespesa')}>
                        <Image source={require('../../../assets/image/mais.png')} />
                    </TouchableOpacity>
                </View>

                <FlatList
                    style={style.list}
                    data={listDespesas}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <UltimasMovimentacoes data={item} />}
                />
            </View>
        </View>
    );
}
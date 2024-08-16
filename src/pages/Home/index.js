import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, SafeAreaView, Alert } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { styles } from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import HeaderHome from "../../components/HeaderHome";
import Balance from "../../components/Balance";
import Contas from "../../components/Contas";
import UltimasMovimentacoes from "../../components/UltimasMovimentações";

export default function Home() {
    const [user, setUser] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [totalBalance, setTotalBalance] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const navigation = useNavigation();


    const loadUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem('user');
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);

            // Fazer as requisições para obter contas e despesas
            await fetchAccounts(parsedUser.id);
            await fetchExpenses(parsedUser.id);
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível carregar os dados do usuário: ' + error.message);
        }
    };

    const fetchAccounts = async (userId) => {
        try {
            const response = await api.get('/accounts', {
                params: { userId }
            });
            const accountsData = response.data;
            setAccounts(accountsData);

            // Calcular saldo total das contas
            const total = accountsData.reduce((sum, account) => sum + account.balance, 0);
            setTotalBalance(total);
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível carregar as contas: ' + error.message);
        }
    };

    const fetchExpenses = async (userId) => {
        try {
            const response = await api.get(`/expenses/user/${userId}`);
            const expensesData = response.data;

            // Filtrar despesas para exibir apenas as do mês e ano atuais
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            const filteredExpenses = expensesData.filter(expense => {
                const expenseDate = new Date(expense.date);
                return (
                    expenseDate.getMonth() === currentMonth &&
                    expenseDate.getFullYear() === currentYear
                );
            });

            setExpenses(filteredExpenses);

            // Calcular total das despesas
            const total = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);
            setTotalExpenses(total);
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível carregar as despesas: ' + error.message);
        }
    };

    useFocusEffect(
        useCallback(() => {
            loadUserData();
        }, [])
    );


    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {user && <HeaderHome nome={user.name} />}

                <Balance saldo={totalBalance.toFixed(2)} despesas={totalExpenses.toFixed(2)} />

                <View style={styles.sessao}>
                    <View style={styles.containerLegenda}>
                        <Text style={styles.title}>Contas</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('NovaConta')}>
                            <Image source={require('../../../assets/image/mais.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.list}>
                        <FlatList
                            data={accounts}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={({ item }) => <Contas data={item} />}
                        />
                    </View>
                </View>

                <View style={styles.sessao}>
                    <View style={styles.containerLegenda}>
                        <Text style={styles.title}>Despesas</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('NovaDespesa')}>
                            <Image source={require('../../../assets/image/mais.png')} />
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        style={styles.list}
                        data={expenses}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => <UltimasMovimentacoes data={item} />}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

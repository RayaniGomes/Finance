import { StyleSheet } from "react-native";
import { cores } from "../../components/Cores";

export const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: cores.azulEscuro,
    },
    
    scrollViewContent: {
        flexGrow: 1,
    },

    balance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 32,
    },

    sessao: {
        paddingHorizontal: 32,
        paddingBottom: 32,
    },

    containerLegenda: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingEnd: 16,
    },

    title: {
        fontSize: 14,
        fontWeight: '300',
        color: cores.branco,
    },

    list: {
        backgroundColor: cores.azulMedio,
        borderRadius: 20,
        padding: 16,
    },    
    
})
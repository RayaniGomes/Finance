import { StyleSheet } from "react-native";
import { cores } from "../../componets/Cores";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cores.azulEscuro,
    },

    sessao: {
        paddingHorizontal: 32,
        paddingBottom: 32,
    },

    containerLegenda: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
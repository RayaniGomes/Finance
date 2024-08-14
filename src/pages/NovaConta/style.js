import { StyleSheet } from "react-native";
import { cores } from "../../components/Cores";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cores.azulEscuro,
    },

    containerForms: {
        justifyContent: 'center',
        marginHorizontal: 32,
        marginTop: 32,
    },

    label: {
        fontSize: 14,
        fontWeight: '300',
        color: cores.branco,
    },

    input: {
        paddingVertical: 5,
        borderBottomColor: cores.branco,
        borderBottomWidth: 1,
        color: cores.branco,
        fontSize: 14,
        fontWeight: '400',
    },

    containerButtons: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    button: {
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 60,
        borderRadius: 50,
    },

    buttonText: {
        color: cores.branco,
        fontSize: 14,
        fontWeight: '500',
    },
});
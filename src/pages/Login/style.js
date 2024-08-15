import { StyleSheet } from "react-native";
import { cores } from "../../components/Cores";

export const style = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
    },

    scrollViewContent: {
        flexGrow: 1,
    },

    background: {
        flex: 1,
        resizeMode: 'contain',
    },

    containerBody: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerInput: {
        paddingHorizontal: 55,
    },

    inputText: {
        color: cores.branco,
        fontSize: 14,
        fontWeight: '400',
        marginTop: 20,
        textAlign: 'left',
    },

    input: {
        width: 300,
        height: 40,
        backgroundColor: '#EFF1EE1A',
        color: cores.branco,
        paddingLeft: 10,
        borderRadius: 10,
        borderBottomWidth: 0.5,
        borderColor: cores.branco,
        placeholderTextColor: cores.branco,
    },

    containerButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    button: {
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderRadius: 50,
    },

    buttonText: {
        color: cores.branco,
        fontSize: 14,
        fontWeight: '500',
    },

    containerRegistrar: {
        width: 300,
        marginTop: 10,
        marginHorizontal: 60,
    },

    registrarText: {
        color: '#D9D9D980',
        fontSize: 14,
        fontWeight: '400',
        textDecorationLine: 'underline',
    },
})
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        position: 'relative'
    },

    containerBody: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        alignItems: 'center',
        marginVertical: 100,
    },

    containerLogin: {
        flex: 2,
    },

    containerInput: {
        width: "100%",
        paddingLeft: 55,
        paddingRight: 55,
    },

    inputText: {
        color: '#EFF1EE',
        fontSize: 14,
        fontWeight: '400',
        marginTop: 20,
        marginBottom: 5,
        textAlign: 'left'
    },

    input: {
        width: 300,
        height: 50,
        backgroundColor: '#EFF1EE1A',
        paddingLeft: 10,
        borderRadius: 10,
        borderBottomWidth: 0.5,
        borderColor: '#EFF1EE',
        marginBottom: 10,
        placeholderTextColor: '#EFF1EE'
    },

    containerButtons: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    button: {
        width: 130,
        height: 50,
        alignItems: 'center',
        justifyContent:'center',
        margin: 50,
        borderRadius: 50,
    },
    
    buttonText: {
        color: '#EFF1EE',
        fontSize: 14,
        fontWeight: '500',
    },
    
    containerRegistrar: {
        flex: 1,
    },
    
    registrarText: {
        color: '#D9D9D980',
        fontSize: 14,
        fontWeight: '400',
        textDecorationLine: 'underline',
    }
})
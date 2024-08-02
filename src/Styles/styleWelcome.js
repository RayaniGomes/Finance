import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        position: 'relative',
    },

    containerBody: {
        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 100,
    },
    
    containerLogo: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
    },
    
    containerButtons: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 50,
    },

    button: {
        width: 130,
        height: 50,
        alignItems: 'center',
        justifyContent:'center',
        margin: 15,
        borderRadius: 50,
    },

    buttonText: {
        color: '#EFF1EE',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '500',
    }
})
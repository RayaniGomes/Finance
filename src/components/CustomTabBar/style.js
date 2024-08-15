import { StyleSheet } from "react-native";
import { cores } from "../Cores";

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: cores.azulEscuro,
    },
    
    content: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: cores.azulMedio,
        position: 'absolute',
        bottom: 0,
    },

    gradienteButton: {
        borderRadius: 100,
        padding: 5,
        margin: 10,
    }
})
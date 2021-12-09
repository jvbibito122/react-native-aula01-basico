import { StyleSheet } from 'react-native';
import estiloInicial from '../Inicial/estiloInicial';

const estiloColecao = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borda: {
        backgroundColor: '#EEEEEE',
        width: '80%',
        height: '16%',
        borderRadius: 10,
    },
    texto: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 20,
        borderColor: '#5ED4FF',
        backgroundColor: '#5ED4FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'
    },
})
export default estiloColecao
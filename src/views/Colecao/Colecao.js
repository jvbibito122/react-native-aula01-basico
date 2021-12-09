import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import estiloColecao from './estiloColecao';

function Colecao({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloColecao.container}>
            <View style={estiloColecao.borda}>

                <Text style={estiloColecao.texto}> Inicio </Text>
                        <Text style={estiloColecao.texto}> Zeta Restaurant Lounge </Text>

                
            </View>
            <img src="https://resizer.otstatic.com/v2/photos/wide-huge/1/25952425.jpg" witdh="400px" height="400px"/>

            <TouchableOpacity style={estiloColecao.botaoContainer} onPress={voltar}>
                    <Text style={estiloColecao.botaoTexto}>Voltar</Text>
             </TouchableOpacity>
            
            <h5>Todos os direitos reservados © João Victor Ferreira da Silva 2º DSA</h5> 

        </View>
    )
} 
export default Colecao;
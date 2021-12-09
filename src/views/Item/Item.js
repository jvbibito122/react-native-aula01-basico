import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import estiloItem from './estiloItem';

function Item({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloItem.container}>
            <View style={estiloItem.borda}>

                <Text style={estiloItem.texto}>Cardápio </Text>
                        <Text style={estiloItem.texto}> Esse é nosso cardápio principal, caso queiram saber sobre mais algum item contate-nos</Text>

                
            </View>
            <img src="https://d4t7t8y8xqo0t.cloudfront.net/resized/1080X/restaurant%2F623082%2Fmenu%2F623082_1.jpg" witdh="300px" height="370px"/>

            <TouchableOpacity style={estiloItem.botaoContainer} onPress={voltar}>
                    <Text style={estiloItem.botaoTexto}>Voltar</Text>
             </TouchableOpacity>
            
            <h5>Todos os direitos reservados © João Victor Ferreira da Silva 2º DSA</h5> 

        </View>
    )
}
export default Item;
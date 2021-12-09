import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloPerfil from './estiloPerfil';

function Perfil ({ navigation }) {
    const voltar = () => {
        navigation.goBack();
    }


return (
    <View style={estiloPerfil.container}>
        <View style={estiloPerfil.borda}>
            <Text style={estiloPerfil.texto}> Quem somos? </Text>
           
            <center>
            <Text style={estiloPerfil.texto}> Este site foi criado com o intuito de divulgar sobre o restaurante Zeta Restaurant Lounge e seu cardápio</Text>
            <br/>
            </center>
                
            </View>


            <img src="https://cdn.discordapp.com/attachments/721839281513037832/913936313361764383/mMTXIfP8pyQAAAAASUVORK5CYII.png" width="600px" height="400px"/>
            <center>
            <br/><br/>
            <Text style={estiloPerfil.texto}> Lobby Level, Address Downtown - Sheikh Mohammed bin Rashid Blvd - Dubai - Emirados Árabes Unidos</Text>
            </center>

<h5>Todos os direitos reservados © João Victor Ferreira da Silva 2º DSA</h5> 
    </View>
    
)
}
export default Perfil;

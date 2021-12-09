import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inicial from '../../views/Inicial/Inicial';
import Colecao from '../../views/Colecao/Colecao';
import Item from '../../views/Item/Item';
import estiloRotasStack from './estiloRotasStack';

const Stack = createStackNavigator ();

const RotasPrincipalStack = () => {
    return (
        <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen
            name="Home" component={Inicial}
            options={ { cardStyle: estiloRotasStack.screenInicial,
                                headerShown: false}} />
            <Stack.Screen
            name="Inicio" component={Colecao}
            options={ {cardStyle: estiloRotasStack.screenColecao, 
                       headerShown: false}}/>
            <Stack.Screen
            name="Item" component={Item}
            options={ { cardStyle: estiloRotasStack.screenItem,
                        headerShown: false}} />
        </Stack.Navigator>
    );
}
export default RotasPrincipalStack;
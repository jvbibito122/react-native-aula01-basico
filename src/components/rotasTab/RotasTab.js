import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const RotasTab = () => {
    return(
        <Tab.Navigator 
        tabBarOptions={ {labelStyle: { fontSize: 24 },
                        style: {backgroundColor: '#5ED4FF'},
                        activeTintColor: '#000000'} }
        >
        <Tab.Screen name="Restaurante" component={RotasDrawer} />
        <Tab.Screen name="Quem somos?" component={Perfil} />
        </Tab.Navigator>
    );
}

export default RotasTab
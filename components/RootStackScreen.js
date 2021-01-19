import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Submit from "./Submit";
import Item from "./Item";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator>
        <RootStack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <RootStack.Screen name="Submit" options={{
            headerStyle: {
                backgroundColor: '#BD2B26',
            }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }, headerTitleAlign: 'center'
        }} component={Submit} />
        <RootStack.Screen name="Item" options={{headerShown:false}} component={Item}  />
    </RootStack.Navigator>
);

export default RootStackScreen;
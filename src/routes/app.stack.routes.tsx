import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { NewsDetails } from '../screens/NewsDetails';
import { NavigationContainer } from '@react-navigation/native';


const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {

    return (
        <NavigationContainer>
            <Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false
                }}
            >

                <Screen
                    name="Home"
                    component={Home}
                />

                <Screen
                    name="details"
                    component={NewsDetails}
                />

            </Navigator>
        </NavigationContainer>
    )
}
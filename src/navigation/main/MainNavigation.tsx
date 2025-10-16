import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/main/HomeScreen';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
        </Tab.Navigator>
    )
}

export default MainNavigation
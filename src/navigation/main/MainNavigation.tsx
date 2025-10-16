import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/main/HomeScreen';
import TabbarProp from '../../layouts/naviProp/TabbarProp';
import NotificationScreen from '../../screen/main/NotificationScreen';
import AnalizeScreen from '../../screen/main/AnalizeScreen';
import ProfileScreen from '../../screen/main/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}
            tabBar={(props) => <TabbarProp   {...props} />
            }
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="AnalizeScreen" component={AnalizeScreen} />
            <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator >
    )
}

export default MainNavigation
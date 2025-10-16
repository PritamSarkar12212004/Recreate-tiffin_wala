import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../../screen/auth/AuthScreen';
import VarifyScreen from '../../screen/auth/VarifyScreen';
const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: "slide_from_right"
        }}>
            <Stack.Screen name="AuthScreen" component={AuthScreen} />
            <Stack.Screen name="VarifyScreen" component={VarifyScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigation
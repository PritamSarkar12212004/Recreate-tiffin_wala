import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import RoutesConst from '../../constants/routes/RoutesConst';
import DailyMenuScreen from '../../screen/stackscreen/main/DailyMenuScreen';
const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen options={{
                animation: "fade_from_right"
            }} name={RoutesConst.STACK_SCREEN.DAILYMENU} component={DailyMenuScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation
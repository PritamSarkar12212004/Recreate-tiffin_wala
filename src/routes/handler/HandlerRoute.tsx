import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashNavigation from '../../navigation/splash/SplashNavigation';
const Stack = createNativeStackNavigator();

const HandlerRoute = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="SplashNavigation" component={SplashNavigation} />
    </Stack.Navigator>
  )
}

export default HandlerRoute
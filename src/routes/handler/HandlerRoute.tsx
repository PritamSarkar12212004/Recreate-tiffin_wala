import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screen/splash/SplashScreen';
import AuthNavigation from '../../navigation/auth/AuthNavigation';
import { userContext } from '../../utils/provider/ContextProvider';
import MainNavigation from '../../navigation/main/MainNavigation';
import StackNavigation from '../../navigation/main/StackNavigation';
const Stack = createNativeStackNavigator();

const HandlerRoute = () => {
  const { initialRoute } = userContext()
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName={"MainNavigation"}>
      <Stack.Screen name="SplashNavigation" component={SplashScreen} />
      <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      <Stack.Screen name="MainNavigation" component={MainNavigation} />
      <Stack.Screen name="StackNavigation" component={StackNavigation} />
    </Stack.Navigator>
  )
}

export default HandlerRoute
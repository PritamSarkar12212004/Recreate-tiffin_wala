import "./global.css"
import React from 'react'
import { ContextProvider } from "./src/utils/provider/ContextProvider"
import HelperRoute from "./src/routes/helper/HelperRoute"
import HandlerRoute from "./src/routes/handler/HandlerRoute"
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar } from "react-native"
import RootWraper from "./src/layouts/wraper/RootWraper"
import ColorConst from "./src/constants/color/ColorConst"
import OrientationLock from "./src/modules/oreantetion/oreantetionLocaker"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{
        flex: 1
      }}>
        <RootWraper>
          <StatusBar
            barStyle="light-content"
            backgroundColor={ColorConst.ROOT_COLOR}
            translucent
          />
          <OrientationLock />
          <NavigationContainer>
            <ContextProvider>
              <HelperRoute>
                <HandlerRoute />
              </HelperRoute>
            </ContextProvider>
          </NavigationContainer>
        </RootWraper >
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App
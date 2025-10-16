import "./global.css"
import React from 'react'
import { ContextProvider } from "./src/utils/provider/ContextProvider"
import HelperRoute from "./src/routes/helper/HelperRoute"
import HandlerRoute from "./src/routes/handler/HandlerRoute"
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <ContextProvider>
        <HelperRoute>
          <HandlerRoute />
        </HelperRoute>
      </ContextProvider>
    </NavigationContainer>
  )
}

export default App
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const RootWraper = ({ children }: any) => {
    const { bottom, top } = useSafeAreaInsets()

    return (
        <View style={{
            flex: 1,
            paddingTop: top,
            paddingBottom: bottom,
            backgroundColor: "#171717"
        }}>

            {children}
        </View>
    )
}
export default RootWraper
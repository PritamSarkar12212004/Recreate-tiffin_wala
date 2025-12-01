import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import StackWraper from '../../../layouts/wraper/StackWraper'

const StackLoader = ({ navigaton }: any) => {
    return (
        <StackWraper>
            <View className='flex-1 flex items-center justify-center'>
                <ActivityIndicator color={"blue"} size={"large"} />
            </View>
        </StackWraper>
    )
}

export default StackLoader
import { View, Text } from 'react-native'
import React from 'react'
import Icon from '../../../global/icon/Icon'

const RiseReportCard = () => {
    return (
        <View className='w-full bg-[#222222] mt-10 px-3 py-4 rounded-2xl'>
            <View className='w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center'>
                <View className='-rotate-45'>
                    <Icon name='arrow-right' color='white' />
                </View>
            </View>
        </View>
    )
}

export default RiseReportCard
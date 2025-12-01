import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '../../global/icon/Icon'

const SubNavigationHeader = ({ navigation, title }: any) => {
    return (
        <View className='w-full flex flex-row items-center justify-between pb-3'>
            <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()} className='h-12 w-12 bg-zinc-900 rounded-full flex items-center justify-center'>
                <Icon name='chevron-left' color='white' />
            </TouchableOpacity>
            <Text className='text-white font-bold'>{title}</Text>
            <View className='w-12 h-12' />
        </View>
    )
}

export default SubNavigationHeader
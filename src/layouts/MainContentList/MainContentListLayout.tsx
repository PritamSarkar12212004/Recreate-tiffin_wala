import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '../../components/global/icon/Icon'

const MainContentListLayout = ({ children, title }: any) => {
    return (
        <View className='w-full flex mt-3'>
            <View className='w-full flex flex-row items-center justify-between'>
                <Text className='text-xl text-white tracking-widest font-semibold'>{title}</Text>
                <TouchableOpacity className='flex items-center justify-center h-10 ' activeOpacity={0.9}>
                    <Text className='text-lg text-zinc-300'>See all</Text>
                </TouchableOpacity>
            </View>
            {
                children
            }
        </View>
    )
}

export default MainContentListLayout
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from '../../global/icon/Icon'

const MainHeader = () => {
    return (
        <View className='w-full  flex flex-row items-center justify-between pb-1'>
            <TouchableOpacity activeOpacity={0.8} className='flex flex-row items-center gap-3'>
                <View className='relative'>
                    <View className='h-14 w-14 rounded-full p-0.5'>
                        <Image
                            source={{
                                uri: "https://i.pinimg.com/736x/21/86/eb/2186ebd870dacbc5221d4684e1f94d13.jpg"
                            }}
                            className='w-full h-full rounded-full border-2 border-gray-900'
                            resizeMode='cover'
                        />
                    </View>
                    <View className='absolute bottom-1 right-1 h-3 w-3 rounded-full bg-green-500 border border-gray-900'></View>
                </View>

                <View className='flex flex-col'>
                    <Text className='text-xl text-white font-bold tracking-tight'>Pritam</Text>
                    <Text className='text-sm text-gray-400'>Online</Text>
                </View>
            </TouchableOpacity>

            <View className='flex flex-row gap-4 items-center'>
                <TouchableOpacity
                    activeOpacity={0.7}
                    className='relative px-4 py-2 bg-blue-700 rounded-2xl flex flex-row items-center justify-center gap-2 shadow-lg shadow-blue-900/30'
                >
                    <Icon name='hand' color='white' size={12} />
                    <Text className='text-white font-semibold text-sm'>28</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    className='relative h-11 w-11 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700 shadow-lg'
                >
                    <Icon name='calendar' color='white' size={18} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MainHeader
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'react-native-linear-gradient'
import readStorage from '../../../../functions/helper/storage/readStorage'
import StorageToken from '../../../../constants/token/StorageToken'

const { width } = Dimensions.get('window')

const MainPoster = ({ sheetRef }: {
    sheetRef: any
}) => {
    const LoginChecker = async() => {
        const check = await readStorage({ key: StorageToken.AUTH_TOKEN.DATA });
        if (check !== true) {
            sheetRef.current?.open()
        }
    }
    return (
        <View className='w-full mt-5'>
            <LinearGradient
                colors={['#FF6B6B', '#FF8E53']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className='w-full rounded-2xl overflow-hidden'
            >
                <View style={{ minHeight: width * 0.45 }} className='p-4'>
                    <View className='flex-row flex-1'>
                        <View className='flex-1 pr-2 justify-between'>
                            <View>
                                <View className='bg-white/20 px-3 py-1 rounded-full self-start mb-2'>
                                    <Text className='text-white text-xs font-bold'>NEW USER OFFER</Text>
                                </View>

                                <Text className='text-white text-2xl font-bold leading-tight mt-1'>
                                    30% OFF
                                </Text>
                                <Text className='text-white text-lg font-semibold mt-1'>
                                    First Tiffin Booking
                                </Text>

                                <Text className='text-white/90 text-sm mt-2'>
                                    Healthy meals • Fresh daily
                                </Text>
                            </View>

                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => LoginChecker()}
                                className='bg-white px-4 py-3 rounded-xl mt-3 self-start'
                                style={{ elevation: 5, shadowColor: '#000' }}
                            >
                                <Text className='text-[#FF6B6B] font-bold text-sm'>
                                    CLAIM OFFER
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View className='w-1/2 pl-2 justify-center items-center'>
                            <View className='relative'>
                                <Image
                                    source={{
                                        uri: "https://i.pinimg.com/736x/48/14/09/4814092bd897ee4b4025381610e33343.jpg"
                                    }}
                                    style={{ width: width * 0.35, height: width * 0.35 }}
                                    className='rounded-full'
                                    resizeMode='cover'
                                />
                                <View className='absolute -top-2 -right-2 bg-white px-3 py-1 rounded-full shadow-lg'>
                                    <Text className='text-[#FF6B6B] font-bold text-xs'>30% OFF</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

export default MainPoster
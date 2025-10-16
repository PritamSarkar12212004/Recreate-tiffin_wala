import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, BackHandler } from 'react-native'
import React, { useState } from 'react'
import MainWraper from '../../layouts/wraper/MainWraper'
import SplashHeader from '../../components/splash/header/SplashHeader'
import Icon from '../../components/global/icon/Icon'
import PhoneNumberFilter from '../../functions/auth/authPage/phoneNumber/PhoneNumberFilter'
import useOtpApi from '../../hooks/api/auth/useOtpApi'
import RoutesConst from '../../constants/routes/RoutesConst'

const AuthScreen = ({ navigation }: any) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const formatPhoneNumber = (text: any) => {
        PhoneNumberFilter({ setPhoneNumber: setPhoneNumber, text: text })
    }
    const callApi = () => {
        useOtpApi()
        navigation.navigate(RoutesConst.AUTH_ROUTE.VARIFY_SCREEN)
    }

    return (
        <MainWraper>
                <SplashHeader />
                <View className='flex-1 pt-10 '>
                    <View className='mb-10'>
                        <Text className='text-5xl font-bold text-white mb-3 leading-12'>
                            Welcome Back!
                        </Text>
                        <Text className='text-gray-300 text-base font-medium'>
                            Log in with your phone number to continue
                        </Text>
                    </View>
                    <View className='bg-white/5 rounded-2xl p-6 border border-white/10'>
                        <Text className='text-white text-lg font-semibold mb-4'>
                            Phone Number
                        </Text>
                        <View className='flex-row items-center bg-white/10 rounded-xl px-4 border-[1px] border-transparent focus:border-blue-500'>
                            <View className='flex-row items-center pr-4 border-r border-white/20'>
                                <Icon name='phone' color='white' size={18} />
                            </View>
                            <TextInput
                                className='flex-1 h-16 text-white text-lg px-4 tracking-widest'
                                placeholder='Enter your phone number'
                                placeholderTextColor="#9CA3AF"
                                keyboardType='phone-pad'
                                value={phoneNumber}
                                onChangeText={(text) => formatPhoneNumber(text)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                selectionColor="#3B82F6"
                            />
                        </View>
                        <Text className='text-gray-400 text-sm mt-3'>
                            We'll send you a verification code via whatsapp
                        </Text>
                    </View>
                    <TouchableOpacity
                        className={`mt-8 bg-blue-500 rounded-xl h-14 justify-center items-center shadow-lg ${phoneNumber.length === 10 ? 'opacity-100' : 'opacity-50'
                            }`}
                        disabled={phoneNumber.length < 10}
                        onPress={() => callApi()}
                        activeOpacity={0.8}
                    >
                        <Text className='text-white text-lg font-bold'>
                            Continue
                        </Text>
                    </TouchableOpacity>
                    <View className='flex-1 justify-end pb-6'>
                        <Text className='text-gray-400 text-center text-sm'>
                            By continuing, you agree to our{' '}
                            <Text className='text-blue-400'>Terms of Service</Text> and{' '}
                            <Text className='text-blue-400'>Privacy Policy</Text>
                        </Text>
                    </View>
                </View>
        </MainWraper>
    )
}

export default AuthScreen
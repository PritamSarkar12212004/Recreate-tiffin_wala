import { View, Text, TouchableOpacity, BackHandler } from 'react-native'
import React from 'react'
import Icon from '../../global/icon/Icon'
import { useNavigation } from '@react-navigation/native';

const SplashHeader = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
        if (navigation.canGoBack()) {
            navigation.goBack(); // agar previous screen hai to wapas jao
        } else {
            BackHandler.exitApp(); // warna app band kar do
        }
    };

    return (
        <View className='w-full flex items-start justify-center'>
            <TouchableOpacity
                onPress={handleBackPress}
                className='h-12 w-12 rounded-full flex items-center justify-center bg-zinc-600/40'
            >
                <Icon color={'gray'} name={'arrow-left'} size={25} />
            </TouchableOpacity>
        </View>
    );
};



export default SplashHeader
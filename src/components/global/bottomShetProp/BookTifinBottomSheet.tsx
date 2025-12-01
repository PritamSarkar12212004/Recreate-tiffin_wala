import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '../icon/Icon'
import RoutesConst from '../../../constants/routes/RoutesConst'

const BookTifinBottomSheet = ({ sheetRef, navigation }: {
    sheetRef: any
    navigation: any
}) => {
    return (
        <View className="flex-1 p-5">
            <View className="items-center mb-6">
                <View className="w-16 h-16 bg-orange-500/20 rounded-full items-center justify-center mb-4">
                    <Icon name="shopping-bag" size={32} color="#f97316" />
                </View>
                <Text className="text-2xl font-bold text-white mt-2 mb-2">Start Your Tiffin Service</Text>
                <Text className="text-zinc-400 text-center text-sm">
                    Book daily meals and enjoy hassle-free delivery
                </Text>
            </View>
            <View className="mb-6">
                <View className="flex-row justify-between mb-4">
                    <View className="items-center w-1/3">
                        <View className="p-3 bg-green-500/10 rounded-lg mb-2">
                            <Icon name="calendar" size={20} color="#10b981" />
                        </View>
                        <Text className="text-white text-xs font-medium text-center">Daily Meals</Text>
                    </View>
                    <View className="items-center w-1/3">
                        <View className="p-3 bg-blue-500/10 rounded-lg mb-2">
                            <Icon name="clock" size={20} color="#3b82f6" />
                        </View>
                        <Text className="text-white text-xs font-medium text-center">Timely Delivery</Text>
                    </View>

                    <View className="items-center w-1/3">
                        <View className="p-3 bg-purple-500/10 rounded-lg mb-2">
                            <Icon name="shield" size={20} color="#8b5cf6" />
                        </View>
                        <Text className="text-white text-xs font-medium text-center">Hygienic</Text>
                    </View>
                </View>
                <View className="flex-row justify-between">
                    <View className="items-center w-1/3">
                        <View className="p-3 bg-red-500/10 rounded-lg mb-2">
                            <Icon name="repeat" size={20} color="#ef4444" />
                        </View>
                        <Text className="text-white text-xs font-medium text-center">Flexible Plans</Text>
                    </View>
                    <View className="items-center w-1/3">
                        <View className="p-3 bg-yellow-500/10 rounded-lg mb-2">
                            <Icon name="star" size={20} color="#f59e0b" />
                        </View>
                        <Text className="text-white text-xs font-medium text-center">Premium Quality</Text>
                    </View>

                    <View className="items-center w-1/3">
                        <View className="p-3 bg-cyan-500/10 rounded-lg mb-2">
                            <Icon name="truck" size={20} color="#06b6d4" />
                        </View>
                        <Text className="text-white text-xs font-medium text-center">Free Delivery</Text>
                    </View>
                </View>
            </View>
            <View className="bg-zinc-800/30 rounded-xl p-4 mb-6">
                <Text className="text-white font-semibold mb-3">Why Book With Us?</Text>
                <View className="space-y-2">
                    <View className="flex-row items-start gap-2">
                        <Icon name="check" size={16} color="#10b981" />
                        <Text className="text-zinc-300 text-sm flex-1">Daily changing menu with variety</Text>
                    </View>
                    <View className="flex-row items-start gap-2">
                        <Icon name="check" size={16} color="#10b981" />
                        <Text className="text-zinc-300 text-sm flex-1">Veg & Non-veg options available</Text>
                    </View>
                    <View className="flex-row items-start gap-2">
                        <Icon name="check" size={16} color="#10b981" />
                        <Text className="text-zinc-300 text-sm flex-1">Monthly, weekly & daily plans</Text>
                    </View>
                </View>
            </View>

            <View className="gap-3">
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                        sheetRef.current?.close()

                    }}
                    className="bg-orange-500 py-4 rounded-xl"
                >
                    <Text className="text-white text-center font-semibold text-base">
                        Book Tiffin Now
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(RoutesConst.STACK_SCREEN.MAIN, {
                            screen: RoutesConst.STACK_SCREEN.DAILYMENU
                        })
                        sheetRef.current?.close()
                    }
                    }
                    className="py-3"
                >
                    <Text className="text-zinc-400 text-center">
                        Explore Menu First
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BookTifinBottomSheet
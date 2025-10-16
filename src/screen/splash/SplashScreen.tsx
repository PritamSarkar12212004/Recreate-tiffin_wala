import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Animation from '../../components/global/Animation/Animation';
import SplashWraper from '../../layouts/wraper/SplashWraper';
import AnimationConst from '../../constants/animation/AnimationConst';
import splashNavigateFunc from '../../functions/splash/splashNavigateFunc';

const { width } = Dimensions.get('window');

const SplashScreen = ({ navigation }: any) => {
    const features = [
        { icon: '🍽️', title: 'Fresh Meals', description: 'Daily prepared hygienic food' },
        { icon: '🚚', title: 'Live Tracking', description: 'Quick doorstep service' },
        { icon: '⭐', title: 'Premium Quality', description: 'Best homemade taste' },
        { icon: '💳', title: 'Easy Payment', description: 'Secure & multiple options' },
    ];

    return (
        <SplashWraper>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View className="flex-1 items-center justify-center px-6 gap-8 py-8">
                    {/* Header Section */}
                    <View className="items-center mt-10 gap-6">
                        <Animation
                            height={220}
                            width={220}
                            path={AnimationConst.SPLASH_SCREEN.ANIMATION}
                        />

                        <View className="items-center gap-4">
                            <Text className="text-4xl font-bold text-white text-center tracking-wider">
                                Welcome to <Text className="text-[#44ED9D]">Tiffin Walla</Text>
                            </Text>

                            <Text className="text-white/80 text-center text-lg leading-7 px-2">
                                Experience the joy of <Text className="text-white font-semibold">homemade hygienic tiffins</Text>
                                {' '}delivered straight to your door. Healthy food, quick service,
                                and the best features — crafted especially for you!
                            </Text>
                        </View>
                    </View>

                    {/* Features Grid */}
                    <View className="w-full gap-6">
                        <Text className="text-2xl font-bold text-white text-center mb-2">
                            Why Choose Us?
                        </Text>

                        <View className="flex-row flex-wrap justify-between gap-4">
                            {features.map((feature, index) => (
                                <View
                                    key={index}
                                    className="bg-white/10 rounded-2xl p-4 items-center"
                                    style={{ width: (width - 64) / 2 - 8 }}
                                >
                                    <Text className="text-3xl mb-2">{feature.icon}</Text>
                                    <Text className="text-white font-bold text-center text-sm mb-1">
                                        {feature.title}
                                    </Text>
                                    <Text className="text-white/70 text-xs text-center">
                                        {feature.description}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Stats Section */}
                    <View className="flex-row justify-between items-center bg-white/5 rounded-2xl p-6 w-full">
                        <View className="items-center">
                            <Text className="text-2xl font-bold text-[#44ED9D]">500+</Text>
                            <Text className="text-white/70 text-sm">Happy Customers</Text>
                        </View>
                        <View className="h-8 w-px bg-white/20" />
                        <View className="items-center">
                            <Text className="text-2xl font-bold text-[#44ED9D]">50+</Text>
                            <Text className="text-white/70 text-sm">Expert Chefs</Text>
                        </View>
                        <View className="h-8 w-px bg-white/20" />
                        <View className="items-center">
                            <Text className="text-2xl font-bold text-[#44ED9D]">1000+</Text>
                            <Text className="text-white/70 text-sm">Meals Delivered</Text>
                        </View>
                    </View>

                    {/* Testimonial */}
                    <View className="bg-white/5 rounded-2xl p-6 w-full">
                        <Text className="text-white/70 text-center italic text-base leading-6 mb-3">
                            "Tiffin Walla changed my daily routine! Fresh, homely food delivered right when I need it. Absolutely love the service!"
                        </Text>
                    </View>

                    {/* CTA Section */}
                    <View className="w-full gap-6 mb-4">
                        <TouchableOpacity
                            onPress={() => splashNavigateFunc(navigation)}
                            activeOpacity={0.8}
                            className="w-full h-16 bg-[#44ED9D] rounded-2xl flex items-center justify-center shadow-lg shadow-[#44ED9D]/30"
                        >
                            <Text className="tracking-widest font-bold text-lg text-gray-900">
                                GET STARTED
                            </Text>
                        </TouchableOpacity>

                        <Text className="text-white/50 text-center text-sm">
                            Join 500+ satisfied customers today
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SplashWraper>
    );
};

export default SplashScreen;
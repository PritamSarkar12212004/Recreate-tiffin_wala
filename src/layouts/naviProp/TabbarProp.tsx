import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';
import React, { useEffect, useRef } from 'react';
import ColorConst from '../../constants/color/ColorConst';
import RoutesConst from '../../constants/routes/RoutesConst';
import Icon from '../../components/global/icon/Icon';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const TabbarProp = ({ state, descriptors, navigation }: any) => {
    const tabWidth = SCREEN_WIDTH / 4;
    const translateX = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const routes = [
        { name: RoutesConst.MAIN_SCREEN.HOME, icon: 'house', label: 'Home' },
        { name: RoutesConst.MAIN_SCREEN.Analize, icon: 'chart-bar', label: 'Analyze' },
        { name: RoutesConst.MAIN_SCREEN.NOTIFICATION, icon: 'bell', label: 'Alerts' },
        { name: RoutesConst.MAIN_SCREEN.PROFILE, icon: 'person', label: 'Profile' },
    ];

    useEffect(() => {
        Animated.spring(translateX, {
            toValue: state.index * tabWidth,
            useNativeDriver: true,
            tension: 80,
            friction: 10,
        }).start();
    }, [state.index]);

    const handleNavigate = (path: string, index: number) => {
        // Scale animation on press
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 0.9,
                duration: 80,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 80,
                useNativeDriver: true,
            }),
        ]).start();

        const event = navigation.emit({
            type: 'tabPress',
            target: state.routes[index].key,
        });

        if (!event.defaultPrevented) {
            navigation.navigate(path);
        }
    };

    return (
        <View
            className='w-full flex-row items-center justify-between pt-4 pb-8 px-4 relative'
            style={{
                backgroundColor: ColorConst.ROOT_COLOR,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: -4,
                },
                shadowOpacity: 0.15,
                shadowRadius: 12,
                elevation: 8,
            }}
        >
            {routes.map((item, index) => {
                const isFocused = state.index === index;

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleNavigate(item.name, index)}
                        className='flex-1 items-center justify-center py-2'
                        activeOpacity={0.8}
                    >
                        <Animated.View
                            className='items-center justify-center'
                            style={{
                                transform: [{ scale: isFocused ? scaleAnim : 1 }]
                            }}
                        >
                            {/* Icon Container */}
                            <View className='items-center justify-center w-10 h-10 mb-1'>
                                <Icon
                                    name={item.icon}
                                    color={isFocused ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)'}
                                    size={22}
                                />

                                {/* Notification Badge for Alerts tab */}
                                {item.name === RoutesConst.MAIN_SCREEN.NOTIFICATION && (
                                    <View
                                        className='absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full border border-white'
                                    />
                                )}
                            </View>

                            Label
                            <Text
                                className={`text-xs font-semibold ${isFocused ? 'text-white' : 'text-white/70'
                                    }`}
                                numberOfLines={1}
                            >
                                {item.label}
                            </Text>
                        </Animated.View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TabbarProp;
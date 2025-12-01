import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import ColorConst from '../../constants/color/ColorConst';
import RoutesConst from '../../constants/routes/RoutesConst';
import Icon from '../../components/global/icon/Icon';


const TabbarProp = ({ state, navigation }: any) => {
    const routes = [
        { name: RoutesConst.MAIN_SCREEN.HOME, icon: 'house', label: 'Home' },
        { name: RoutesConst.MAIN_SCREEN.Analize, icon: 'chart-bar', label: 'Analyze' },
        { name: RoutesConst.MAIN_SCREEN.NOTIFICATION, icon: 'bell', label: 'Alerts' },
        { name: RoutesConst.MAIN_SCREEN.PROFILE, icon: 'person', label: 'Profile' },
    ];
    const handleNavigate = (path: string, index: number) => {
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
                        className='flex-1 items-center justify-center '
                        activeOpacity={0.8}
                    >

                        <View className='items-center justify-center w-10 h-10 mb-1'>
                            <Icon
                                name={item.icon}
                                color={isFocused ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)'}
                                size={22}
                            />
                            {item.name === RoutesConst.MAIN_SCREEN.NOTIFICATION && (
                                <View
                                    className='absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full border border-white'
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TabbarProp;
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import React from 'react';

type IconProps = {
    name: string;
    color?: string;
    size?: number;
    iconStyle?: 'solid' | 'regular' | 'brands';
};

const Icon = ({ name, color = 'black', size = 20, iconStyle = 'solid' }: IconProps) => {
    return <FontAwesome6 name={name} iconStyle={iconStyle} color={color} size={size} />;
};

export default Icon;

import React from "react";
import { View } from "react-native";
import ColorConst from "../../constants/color/ColorConst";
const StackWraper = ({ children }: any) => {
    return (
        <View className="flex-1  pt-3 px-3" style={{
            backgroundColor: ColorConst.ROOT_COLOR
        }}>
            {
                children
            }
        </View>
    );
};


export default StackWraper;

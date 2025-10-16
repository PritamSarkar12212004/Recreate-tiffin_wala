import React from "react";
import { View } from "react-native";
import ColorConst from "../../constants/color/ColorConst";
const MainWraper = ({ children }: any) => {
    return (

        <View className="flex-1  p-3" style={{
            backgroundColor: ColorConst.ROOT_COLOR
        }}>
            {
                children
            }
        </View>
    );
};


export default MainWraper;

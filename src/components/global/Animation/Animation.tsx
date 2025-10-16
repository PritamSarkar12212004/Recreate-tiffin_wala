import React from 'react'
import LottieView from "lottie-react-native";

const Animation = ({ path, height, width }: {
    path: any,
    height: number
    width: number
}) => {
    return (
        <LottieView
            source={path}
            style={{ width: width, height: height }}
            autoPlay
            loop
        />
    )
}

export default Animation
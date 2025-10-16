import React from "react";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SplashWraper = ({ children }: any) => {
    const { bottom, top } = useSafeAreaInsets()
    return (
        <LinearGradient
            colors={["#0d0d0d", "#1a1a1a", "#262626", "#0e0e0e"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <View style={{
                paddingTop: top,
                paddingBottom: bottom,
                flex: 1
            }}>

                {
                    children
                }
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default SplashWraper;

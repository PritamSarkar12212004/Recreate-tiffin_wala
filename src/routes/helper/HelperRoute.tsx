import React, { Fragment, useEffect, useState } from 'react'
import { userContext } from '../../utils/provider/ContextProvider'
import PageAuthFunc from '../../functions/helper/root/PageAuthFunc'
import { ActivityIndicator, KeyboardAvoidingView, Platform, View } from 'react-native'
import ColorConst from '../../constants/color/ColorConst'

const HelperRoute = ({ children }: any) => {

    const { reloader, setInitialRoute } = userContext()
    const [data, setData] = useState<any>(null)
    useEffect(() => {
        PageAuthFunc({ setData, setInitialRoute })
    }, [reloader.fullPageReloader])
    if (!data) {
        <View className='flex-1 items-center justify-center ' style={{
            backgroundColor: ColorConst.ROOT_COLOR
        }}>
            <ActivityIndicator color={"white"} size={50} />
        </View>
    } else {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <Fragment>
                    {
                        children
                    }
                </Fragment>
            </KeyboardAvoidingView>
        )
    }
}

export default HelperRoute
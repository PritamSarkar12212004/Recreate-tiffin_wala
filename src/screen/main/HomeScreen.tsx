import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MainWraper from '../../layouts/wraper/MainWraper'
import MainHeder from '../../components/main/header/MainHeder'
import MasterContent from '../../components/main/content/MasterContent'
import MasterContentData from '../../data/main/MasterContentData'

const HomeScreen = () => {
    return (
        <MainWraper>
            <MainHeder />
            <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
                <View>
                    <MasterContent data={MasterContentData} />
                </View>
            </ScrollView>
        </MainWraper>
    )
}

export default HomeScreen
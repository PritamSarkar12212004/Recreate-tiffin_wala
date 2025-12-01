import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MainWraper from '../../layouts/wraper/MainWraper'
import MainHeder from '../../components/main/header/MainHeder'
import MasterContent from '../../components/main/content/MasterContent'
import MasterContentData from '../../data/main/MasterContentData'
import MainPoster from '../../components/main/card/posters/MainPoster'

const HomeScreen = () => {
    return (
        <MainWraper>
            <MainHeder />
            <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
                <View className='w-full'>
                    <MasterContent data={MasterContentData} />
                </View>
                <View className='w-full'>
                    <MainPoster />
                </View>
            </ScrollView>
        </MainWraper>
    )
}

export default HomeScreen
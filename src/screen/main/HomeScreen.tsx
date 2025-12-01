import { ScrollView } from 'react-native'
import React from 'react'
import MainWraper from '../../layouts/wraper/MainWraper'
import MainHeder from '../../components/main/header/MainHeder'
import MasterContent from '../../components/main/content/MasterContent'
import MasterContentData from '../../data/main/MasterContentData'
import MainPoster from '../../components/main/card/posters/MainPoster'
import MainContentListLayout from '../../layouts/MainContentList/MainContentListLayout'
import DailyMenu from '../../components/main/card/dailyMenu/DailyMenu'

const HomeScreen = () => {
    return (
        <MainWraper>
            <MainHeder />
            <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
                <MasterContent data={MasterContentData} />
                <MainPoster />
                <MainContentListLayout title={"Daily Menu"}>
                    <DailyMenu />
                </MainContentListLayout>
            </ScrollView>
        </MainWraper>
    )
}

export default HomeScreen
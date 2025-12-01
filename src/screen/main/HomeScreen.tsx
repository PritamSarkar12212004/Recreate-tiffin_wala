import { ScrollView } from 'react-native'
import React, { useRef } from 'react'
import MainWraper from '../../layouts/wraper/MainWraper'
import MainHeder from '../../components/main/header/MainHeder'
import MasterContent from '../../components/main/content/MasterContent'
import MasterContentData from '../../data/main/MasterContentData'
import MainPoster from '../../components/main/card/posters/MainPoster'
import MainContentListLayout from '../../layouts/MainContentList/MainContentListLayout'
import DailyMenu from '../../components/main/card/dailyMenu/DailyMenu'
import { useNavigation } from '@react-navigation/native'
import RoutesConst from '../../constants/routes/RoutesConst'
import CustomBottomSheet, { BottomSheetRef } from "../../components/global/bottomsheet/CustomBottomSheet";
import BookTifinBottomSheet from '../../components/global/bottomShetProp/BookTifinBottomSheet'

const HomeScreen = () => {
    const sheetRef = useRef<BottomSheetRef>(null);
    const navigation = useNavigation<any>()
    return (
        <MainWraper>
            <MainHeder sheetRef={sheetRef} />
            <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
                <MasterContent data={MasterContentData} />
                <MainPoster sheetRef={sheetRef} />
                <MainContentListLayout title={"Weekly Menu"} func={() => navigation.navigate(RoutesConst.STACK_SCREEN.MAIN, {
                    screen: RoutesConst.STACK_SCREEN.MAIN
                })} >
                    <DailyMenu />
                </MainContentListLayout>
            </ScrollView>
            <CustomBottomSheet ref={sheetRef}>
                <BookTifinBottomSheet navigation={navigation} sheetRef={sheetRef} />
            </CustomBottomSheet>
        </MainWraper>
    )
}

export default HomeScreen

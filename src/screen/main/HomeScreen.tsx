import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
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

const HomeScreen = () => {
    const sheetRef = useRef<BottomSheetRef>(null);
    const navigation = useNavigation<any>()
    return (
        <MainWraper>
            <MainHeder />
            <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
                <MasterContent data={MasterContentData} />
                <MainPoster />
                <MainContentListLayout title={"Daily Menu"} func={() => navigation.navigate(RoutesConst.STACK_SCREEN.MAIN, {
                    screen: RoutesConst.STACK_SCREEN.MAIN
                })} >
                    <DailyMenu />
                </MainContentListLayout>
            </ScrollView>
            <CustomBottomSheet ref={sheetRef}>
                <Text style={styles.heading}>🎉 Advanced Bottom Sheet</Text>
                <Text style={styles.text}>You can put any custom UI here.</Text>

                <TouchableOpacity onPress={() => sheetRef.current?.close()} />
            </CustomBottomSheet>
        </MainWraper>
    )
}

export default HomeScreen
const styles = StyleSheet.create({
    container: { flex: 1 },
    inner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 20,
    },
});
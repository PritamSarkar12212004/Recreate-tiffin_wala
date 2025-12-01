import { View, Text, Image, ScrollView, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from '../../global/icon/Icon'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const CARD_WIDTH = SCREEN_WIDTH * 0.85
const CARD_MARGIN = 12

const MasterContent = ({ data }: {
    data: Array<{
        title: string
        img: string
        rating: number
    }>
}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const flatListRef = useRef<FlatList>(null)



    const renderItem = ({ item, index }: { item: any, index: number }) => {
        return (
            <View
                className='relative rounded-3xl overflow-hidden mx-2'
                style={{
                    width: CARD_WIDTH,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 8,
                }}
            >
                <Image
                    source={{ uri: item.img }}
                    className='w-full h-full'
                    resizeMode='cover'
                    style={{
                        aspectRatio: 0.85
                    }}
                />
                <LinearGradient
                    colors={['rgba(23,23,23,0.9)', 'rgba(23,23,23,0.5)', 'transparent', 'rgba(23,23,23,0.2)']}
                    locations={[0, 0.3, 0.7, 1]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className='absolute top-0 left-0 right-0 bottom-0'
                />

                <View className='absolute top-0 left-0 right-0 p-5'>
                    <View className='flex-row justify-between items-start'>
                        <View className='flex-1 pr-3'>
                            <Text className='text-white/70 font-medium text-xs tracking-wider mb-1'>
                                {item.category || "TODAY'S RECIPE"}
                            </Text>
                            <Text
                                className='text-white font-bold text-2xl leading-tight'
                                numberOfLines={2}
                            >
                                {item.title}
                            </Text>
                            <Text
                                className='text-white/70  mt-3 text-sm leading-tight'
                                numberOfLines={2}
                            >
                                {item.description}
                            </Text>
                        </View>
                        <View className='pt-0.5'>
                            <View className=' px-4 py-2 flex items-center justify-center gap-2 flex-row rounded-xl'>
                                <Icon name='star' size={14} color='white' />
                                <Text className='text-white font-bold'>{item.rating}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className='absolute bottom-0 left-0 right-0 p-5'>
                    <View className='flex-row justify-end items-center'>

                        <TouchableOpacity className='bg-white/20 p-2 rounded-full'>
                            <Icon name='heart' size={18} color='white' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    const handleScroll = (event: any) => {
        const scrollPosition = event.nativeEvent.contentOffset.x
        const index = Math.round(scrollPosition / (CARD_WIDTH + CARD_MARGIN * 2))
        setActiveIndex(index)
    }

    return (
        <View className='w-full mt-3'>
            <View>
                <FlatList
                    ref={flatListRef}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    snapToInterval={CARD_WIDTH + CARD_MARGIN * 2}
                    snapToAlignment="center"
                    decelerationRate="fast"
                    contentContainerStyle={{
                    }}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                />
            </View>

            <View className='flex-row justify-center items-center mt-1'>
                {data.map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        className='mx-1'
                    >
                        <View
                            className={`rounded-full ${activeIndex === index ? 'bg-green-500' : 'bg-gray-300'}`}
                            style={{
                                width: activeIndex === index ? 28 : 8,
                                height: 3,
                                marginHorizontal: 2
                            }}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default MasterContent
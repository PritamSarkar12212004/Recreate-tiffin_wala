import React, { useEffect, useState } from 'react'
import SubNavigationHeader from '../../../components/main/header/SubNavigationHeader'
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import StackWraper from '../../../layouts/wraper/StackWraper'
import StackLoader from '../../../components/main/loader/StackLoader'
import Icon from '../../../components/global/icon/Icon'

type MenuItem = {
    id: string
    name: string
    description: string
    image: string
    type: 'veg' | 'non-veg' | 'common'
    calories?: number
}

type Shift = {
    id: string
    name: string
    icon: string
    iconColor: string
    time: string
    items: MenuItem[]
}

type DayMenu = {
    id: string
    day: string
    date: string
    isToday: boolean
    shifts: Shift[]
}

const DailyMenuScreen = ({ navigation }: any) => {
    const [loading, setLoading] = useState(true)
    const [selectedDay, setSelectedDay] = useState(0)
    const [weekMenu, setWeekMenu] = useState<DayMenu[]>([])

    // Generate sample data for 7 days
    const generateWeekMenu = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const today = new Date()

        const menu: DayMenu[] = days.map((day, index) => {
            const date = new Date(today)
            date.setDate(today.getDate() + (index - today.getDay()))

            return {
                id: `day-${index}`,
                day: day,
                date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                isToday: index === today.getDay(),
                shifts: [
                    {
                        id: 'morning',
                        name: 'Morning',
                        icon: 'sun',
                        iconColor: '#f59e0b',
                        time: '8:00–10:30 AM',
                        items: [
                            {
                                id: 'm1',
                                name: 'Aloo Paratha',
                                description: 'Fresh homemade paratha served with curd & pickle.',
                                image: 'https://i.pinimg.com/736x/4e/70/b9/4e70b9a62f5334ed8219d337b8aba65e.jpg',
                                type: 'veg',
                                calories: 350
                            },
                            {
                                id: 'm2',
                                name: 'Paneer Bhurji',
                                description: 'Spicy scrambled cottage cheese with bread toast.',
                                image: 'https://i.pinimg.com/736x/23/e8/20/23e82059ca5d229b058914128c80a5df.jpg',
                                type: 'veg',
                                calories: 280
                            },
                            {
                                id: 'm3',
                                name: 'Corn Flakes',
                                description: 'With milk and seasonal fruits.',
                                image: 'https://i.pinimg.com/736x/4e/70/b9/4e70b9a62f5334ed8219d337b8aba65e.jpg',
                                type: 'common',
                                calories: 200
                            }
                        ]
                    },
                    {
                        id: 'night',
                        name: 'Night',
                        icon: 'moon',
                        iconColor: '#4da6ff',
                        time: '8:00–10:30 PM',
                        items: [
                            {
                                id: 'n1',
                                name: 'Chicken Curry',
                                description: 'Spicy homestyle chicken curry served with rice.',
                                image: 'https://i.pinimg.com/736x/23/e8/20/23e82059ca5d229b058914128c80a5df.jpg',
                                type: 'non-veg',
                                calories: 450
                            },
                            {
                                id: 'n2',
                                name: 'Vegetable Biryani',
                                description: 'Fragrant rice with mixed vegetables and raita.',
                                image: 'https://i.pinimg.com/736x/4e/70/b9/4e70b9a62f5334ed8219d337b8aba65e.jpg',
                                type: 'veg',
                                calories: 380
                            },
                            {
                                id: 'n3',
                                name: 'Dal Fry',
                                description: 'Lentil curry with jeera rice.',
                                image: 'https://i.pinimg.com/736x/4e/70/b9/4e70b9a62f5334ed8219d337b8aba65e.jpg',
                                type: 'common',
                                calories: 320
                            }
                        ]
                    }
                ]
            }
        })

        setWeekMenu(menu)
        setSelectedDay(today.getDay())
    }

    useEffect(() => {
        setTimeout(() => {
            generateWeekMenu()
            setLoading(false)
        }, 1000)
    }, [])

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'veg': return { bg: 'bg-green-700/20', text: 'text-green-400', border: 'border-green-500/30' }
            case 'non-veg': return { bg: 'bg-red-700/20', text: 'text-red-400', border: 'border-red-500/30' }
            case 'common': return { bg: 'bg-blue-700/20', text: 'text-blue-400', border: 'border-blue-500/30' }
            default: return { bg: 'bg-gray-700/20', text: 'text-gray-400', border: 'border-gray-500/30' }
        }
    }

    if (loading) {
        return <StackLoader navigation={navigation} />
    }

    return (
        <StackWraper>
            <SubNavigationHeader navigation={navigation} title="Weekly Menu" />
            <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
                <View className='flex-1 '>
                    <View className="mb-6">
                        <View className="flex flex-row items-center gap-3 mb-2">
                            <View className="p-2 rounded-xl bg-orange-500/20">
                                <Icon name="rotate-right" color="orange" size={22} />
                            </View>
                            <Text className="text-white font-semibold text-lg tracking-wide">
                                Menu Cycle Information
                            </Text>
                        </View>

                        <Text className="text-zinc-300 leading-5 mb-4">
                            This menu updates 3 times every month for better variety.
                            <Text className="text-orange-400 font-semibold"> Current cycle: 1st – 10th</Text>
                        </Text>
                        <View className="w-full h-[1px] bg-zinc-700/60" />
                    </View>

                    {/* Day Selector */}
                    <View className="mb-6">
                        <Text className="text-lg font-semibold text-white mb-3">Select Day</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
                            {weekMenu.map((day, index) => (
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    key={day.id}
                                    onPress={() => setSelectedDay(index)}
                                    className={`mr-3 px-4 py-3 rounded-xl border ${selectedDay === index
                                        ? 'bg-orange-500 border-orange-500'
                                        : 'bg-zinc-800 border-zinc-700'
                                        }`}
                                >
                                    <Text
                                        className={`text-sm font-medium ${selectedDay === index ? 'text-white' : 'text-zinc-400'
                                            }`}
                                    >
                                        {day.day.substring(0, 3)}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    <View className="mb-8">
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className="text-xl font-semibold text-white">
                                {weekMenu[selectedDay]?.day}'s Menu
                            </Text>
                            {weekMenu[selectedDay]?.isToday && (
                                <View className="px-3 py-1 bg-green-500/20 rounded-full">
                                    <Text className="text-green-400 text-xs font-semibold">TODAY</Text>
                                </View>
                            )}
                        </View>
                        {weekMenu[selectedDay]?.shifts.map((shift) => (
                            <View key={shift.id} className="mb-6">
                                <View className="flex-row items-center justify-between mb-4">
                                    <View className="flex-row items-center gap-3">
                                        <View className="p-2 rounded-xl bg-zinc-800">
                                            <Icon name={shift.icon as any} color={shift.iconColor} size={20} />
                                        </View>
                                        <Text className="text-white font-semibold text-lg">{shift.name}</Text>
                                    </View>
                                    <View className="px-3 py-1 bg-zinc-800 rounded-full">
                                        <Text className="text-zinc-300 text-sm">{shift.time}</Text>
                                    </View>
                                </View>
                                <View className="gap-4">
                                    {shift.items.map((item) => {
                                        const typeColors = getTypeColor(item.type)
                                        return (
                                            <View
                                                key={item.id}
                                                className={`w-full p-4 bg-zinc-900 rounded-2xl border ${typeColors.border}`}
                                            >
                                                <View className="flex-row gap-4">
                                                    <View className="relative">
                                                        <Image
                                                            source={{ uri: item.image }}
                                                            className="h-20 w-20 rounded-xl"
                                                        />
                                                    </View>

                                                    <View className="flex-1">
                                                        <View className="flex-row justify-between items-start">
                                                            <Text className="text-white font-semibold text-base flex-1">
                                                                {item.name}
                                                            </Text>
                                                            <View className={`px-2 py-1 rounded-full ${typeColors.bg}`}>
                                                                <Text className={`text-xs font-semibold ${typeColors.text}`}>
                                                                    {item.type.toUpperCase()}
                                                                </Text>
                                                            </View>
                                                        </View>

                                                        <Text className="text-zinc-400 text-sm mt-2 leading-5">
                                                            {item.description}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    })}
                                </View>
                            </View>
                        ))}
                    </View>
                    <View className="bg-zinc-900 rounded-2xl p-4 border border-zinc-700 mb-8">
                        <Text className="text-white font-semibold text-lg mb-4">Weekly Summary</Text>
                        <View className="flex-row justify-between">
                            <View className="items-center">
                                <Text className="text-2xl font-bold text-green-400">14</Text>
                                <Text className="text-zinc-400 text-sm mt-1">Veg Items</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-2xl font-bold text-red-400">7</Text>
                                <Text className="text-zinc-400 text-sm mt-1">Non-Veg</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-2xl font-bold text-blue-400">7</Text>
                                <Text className="text-zinc-400 text-sm mt-1">Common</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-2xl font-bold text-orange-400">28</Text>
                                <Text className="text-zinc-400 text-sm mt-1">Total Items</Text>
                            </View>
                        </View>
                    </View>

                    <View className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-700/50">
                        <View className="flex-row items-start gap-3">
                            <Icon name="info" size={20} color="#4da6ff" />
                            <View className="flex-1">
                                <Text className="text-white font-medium mb-1">Note</Text>
                                <Text className="text-zinc-400 text-sm leading-5">
                                    • Menu items are subject to change based on availability
                                    {'\n'}• Please inform about allergies in advance
                                    {'\n'}• Special dietary requirements can be accommodated upon request
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </StackWraper>
    )
}

export default DailyMenuScreen
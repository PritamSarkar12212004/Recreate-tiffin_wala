import { View, Text, Image } from 'react-native'
import React from 'react'

const DailyMenu = () => {

    const dayColors = {
        'SUNDAY': { bg: 'bg-orange-500', text: 'text-orange-100' },
        'MONDAY': { bg: 'bg-blue-500', text: 'text-blue-100' },
        'TUESDAY': { bg: 'bg-green-500', text: 'text-green-100' },
        'WEDNESDAY': { bg: 'bg-purple-500', text: 'text-purple-100' },
        'THURSDAY': { bg: 'bg-pink-500', text: 'text-pink-100' },
        'FRIDAY': { bg: 'bg-indigo-500', text: 'text-indigo-100' },
        'SATURDAY': { bg: 'bg-amber-500', text: 'text-amber-100' },
    }

    const weeklyMenu = [
        {
            day: "SUNDAY",
            title: "Dal Chawal",
            desc: "Traditional Indian comfort food with lentils & rice.",
            img: "https://i.pinimg.com/736x/2a/8e/57/2a8e57bc82908377e58203bfd9f95e84.jpg"
        },
        {
            day: "MONDAY",
            title: "Chicken Kadu",
            desc: "Soft parathas stuffed with spiced potato filling.",
            img: "https://i.pinimg.com/1200x/02/05/39/020539d2a69e2663728f2a7b74f8d0fc.jpg"
        },
        {
            day: "TUESDAY",
            title: "Rajma Chawal",
            desc: "Kidney beans cooked in rich curry served with rice.",
            img: "https://i.pinimg.com/736x/4e/70/b9/4e70b9a62f5334ed8219d337b8aba65e.jpg"
        }
    ]

    return (
        <View className='w-full mt-3'>

            {weeklyMenu.map((item, index) => {
                const colorScheme = dayColors[item.day]

                return (
                    <View
                        key={index}
                        className='bg-gray-800 rounded-xl p-3 mb-3'
                    >
                        <View className='flex-row items-center'>

                            <View className={` rounded-xl p-0.5`}>
                                <Image
                                    source={{ uri: item.img }}
                                    className='h-14 w-14 rounded-lg'
                                />
                            </View>

                            <View className='flex-1 ml-3'>
                                <Text className={`text-xs font-bold ${colorScheme.bg} ${colorScheme.text} px-2 py-0.5 rounded-full self-start`}>
                                    {item.day}
                                </Text>

                                <Text className='text-white font-bold text-base mt-1'>
                                    {item.title}
                                </Text>

                                <Text className='text-gray-300 text-xs mt-0.5 line-clamp-2'>
                                    {item.desc}
                                </Text>
                            </View>

                            <View className={`${colorScheme.bg} h-10 w-1 rounded-full`} />
                        </View>
                    </View>
                )
            })}

        </View>
    )
}

export default DailyMenu

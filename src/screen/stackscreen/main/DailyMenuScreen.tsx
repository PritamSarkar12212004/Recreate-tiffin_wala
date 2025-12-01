import React, { useState } from 'react'
import { 
  ScrollView, 
  View, 
  Text, 
  Image, 
  TouchableOpacity,
  Modal,
  Dimensions
} from 'react-native'
import SubNavigationHeader from '../../../components/main/header/SubNavigationHeader'
import StackWraper from '../../../layouts/wraper/StackWraper'
import Icon from '../../../components/global/icon/Icon'

const { width } = Dimensions.get('window')

const DailyMenuScreen = ({ navigation }: any) => {
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [menuCycle, setMenuCycle] = useState(1) // 1, 2, or 3

  // Note: Menu changes 3 times in a month (every 10 days)
  const menuCycles = [
    { id: 1, period: "1st-10th", active: true },
    { id: 2, period: "11th-20th", active: false },
    { id: 3, period: "21st-31st", active: false }
  ]

  const dayColors = {
    'SUNDAY': { 
      bg: 'bg-orange-500', 
      text: 'text-orange-100',
      border: 'border-orange-500'
    },
    'MONDAY': { 
      bg: 'bg-blue-500', 
      text: 'text-blue-100',
      border: 'border-blue-500'
    },
    'TUESDAY': { 
      bg: 'bg-green-500', 
      text: 'text-green-100',
      border: 'border-green-500'
    },
    'WEDNESDAY': { 
      bg: 'bg-purple-500', 
      text: 'text-purple-100',
      border: 'border-purple-500'
    },
    'THURSDAY': { 
      bg: 'bg-pink-500', 
      text: 'text-pink-100',
      border: 'border-pink-500'
    },
    'FRIDAY': { 
      bg: 'bg-indigo-500', 
      text: 'text-indigo-100',
      border: 'border-indigo-500'
    },
    'SATURDAY': { 
      bg: 'bg-amber-500', 
      text: 'text-amber-100',
      border: 'border-amber-500'
    },
  }

  // Weekly menu data - Each day has lunch and dinner, each with 2 dishes
  const weeklyMenu = {
    'SUNDAY': {
      date: "Today",
      lunch: {
        time: "12:30 PM - 2:30 PM",
        nonVeg: {
          title: "Butter Chicken",
          desc: "Tender chicken in rich creamy tomato gravy",
          img: "https://i.pinimg.com/736x/78/0e/14/780e14ed09b1ab43ad528e5b41e5e574.jpg",
          calories: "480 cal",
          prepTime: "45 mins",
          type: "nonveg"
        },
        common: {
          title: "Paneer Butter Masala",
          desc: "Soft paneer in creamy tomato gravy",
          img: "https://i.pinimg.com/736x/9e/8a/9d/9e8a9d8c61f04635ff1adfb20787049f.jpg",
          calories: "420 cal",
          prepTime: "35 mins",
          type: "veg"
        }
      },
      dinner: {
        time: "7:30 PM - 9:30 PM",
        nonVeg: {
          title: "Mutton Biryani",
          desc: "Fragrant basmati rice with tender mutton pieces",
          img: "https://i.pinimg.com/736x/3b/bd/06/3bbd06e1c308b3123803bebc5e78b4ed.jpg",
          calories: "550 cal",
          prepTime: "60 mins",
          type: "nonveg"
        },
        common: {
          title: "Veg Biryani",
          desc: "Aromatic rice with mixed vegetables and spices",
          img: "https://i.pinimg.com/736x/78/4d/21/784d215a96e5a2726c18b7c5bc35ca79.jpg",
          calories: "380 cal",
          prepTime: "40 mins",
          type: "veg"
        }
      }
    },
    'MONDAY': {
      date: "Tomorrow",
      lunch: {
        time: "12:30 PM - 2:30 PM",
        nonVeg: {
          title: "Chicken Curry",
          desc: "Classic chicken curry with Indian spices",
          img: "https://i.pinimg.com/736x/6e/d1/77/6ed177d7c6b49393f12a3b10deca25b6.jpg",
          calories: "350 cal",
          prepTime: "40 mins",
          type: "nonveg"
        },
        common: {
          title: "Dal Tadka",
          desc: "Yellow lentils tempered with spices",
          img: "https://i.pinimg.com/736x/2a/8e/57/2a8e57bc82908377e58203bfd9f95e84.jpg",
          calories: "280 cal",
          prepTime: "30 mins",
          type: "veg"
        }
      },
      dinner: {
        time: "7:30 PM - 9:30 PM",
        nonVeg: {
          title: "Fish Fry",
          desc: "Crispy fried fish with Indian spices",
          img: "https://i.pinimg.com/736x/88/9c/47/889c47f43a189eacf2eab55d2d5ed31f.jpg",
          calories: "320 cal",
          prepTime: "25 mins",
          type: "nonveg"
        },
        common: {
          title: "Aloo Gobi",
          desc: "Potato and cauliflower curry",
          img: "https://i.pinimg.com/736x/45/b4/4a/45b44a21d92f4141899d3df6d72f83de.jpg",
          calories: "250 cal",
          prepTime: "30 mins",
          type: "veg"
        }
      }
    },
    'TUESDAY': {
      date: "12 Dec",
      lunch: {
        time: "12:30 PM - 2:30 PM",
        nonVeg: {
          title: "Chicken Kadai",
          desc: "Spicy chicken curry with bell peppers",
          img: "https://i.pinimg.com/1200x/02/05/39/020539d2a69e2663728f2a7b74f8d0fc.jpg",
          calories: "380 cal",
          prepTime: "35 mins",
          type: "nonveg"
        },
        common: {
          title: "Kadai Paneer",
          desc: "Paneer cubes in spicy gravy",
          img: "https://i.pinimg.com/736x/e6/62/b6/e662b6269ed6e0594a2e53d9b9e1e226.jpg",
          calories: "320 cal",
          prepTime: "30 mins",
          type: "veg"
        }
      },
      dinner: {
        time: "7:30 PM - 9:30 PM",
        nonVeg: {
          title: "Egg Curry",
          desc: "Boiled eggs in flavorful gravy",
          img: "https://i.pinimg.com/736x/41/b4/3c/41b43c14a929bd69ec249408cb108e42.jpg",
          calories: "300 cal",
          prepTime: "25 mins",
          type: "nonveg"
        },
        common: {
          title: "Rajma Chawal",
          desc: "Kidney beans curry with rice",
          img: "https://i.pinimg.com/736x/4e/70/b9/4e70b9a62f5334ed8219d337b8aba65e.jpg",
          calories: "420 cal",
          prepTime: "40 mins",
          type: "veg"
        }
      }
    },
    'WEDNESDAY': {
      date: "13 Dec",
      lunch: {
        time: "12:30 PM - 2:30 PM",
        nonVeg: {
          title: "Mutton Rogan Josh",
          desc: "Kashmiri style lamb curry",
          img: "https://i.pinimg.com/736x/89/d8/66/89d866809f76b8be1b4689e8eb4d2bb3.jpg",
          calories: "450 cal",
          prepTime: "50 mins",
          type: "nonveg"
        },
        common: {
          title: "Malai Kofta",
          desc: "Vegetable balls in creamy gravy",
          img: "https://i.pinimg.com/736x/24/0d/6e/240d6e2e5fcb6e9b46a065363bf88a5f.jpg",
          calories: "380 cal",
          prepTime: "45 mins",
          type: "veg"
        }
      },
      dinner: {
        time: "7:30 PM - 9:30 PM",
        nonVeg: {
          title: "Chicken Tikka Masala",
          desc: "Grilled chicken in creamy sauce",
          img: "https://i.pinimg.com/736x/d5/97/2e/d5972e2d3588b5a9c9df66377768a842.jpg",
          calories: "400 cal",
          prepTime: "40 mins",
          type: "nonveg"
        },
        common: {
          title: "Chana Masala",
          desc: "Chickpeas in spicy gravy",
          img: "https://i.pinimg.com/736x/b1/f9/52/b1f95253a4ed5e4524c2a3d162144d12.jpg",
          calories: "320 cal",
          prepTime: "35 mins",
          type: "veg"
        }
      }
    },
    'THURSDAY': {
      date: "14 Dec",
      lunch: {
        time: "12:30 PM - 2:30 PM",
        nonVeg: {
          title: "Prawn Curry",
          desc: "Prawns in coconut based gravy",
          img: "https://i.pinimg.com/736x/5e/09/0f/5e090ff4007779b0e2c800ef84aa1693.jpg",
          calories: "350 cal",
          prepTime: "30 mins",
          type: "nonveg"
        },
        common: {
          title: "Vegetable Stew",
          desc: "Mixed vegetables in coconut milk",
          img: "https://i.pinimg.com/736x/bd/09/f1/bd09f1861423ac8c8a2da46289c65c8d.jpg",
          calories: "280 cal",
          prepTime: "25 mins",
          type: "veg"
        }
      },
      dinner: {
        time: "7:30 PM - 9:30 PM",
        nonVeg: {
          title: "Chicken Bhuna",
          desc: "Dry spicy chicken preparation",
          img: "https://i.pinimg.com/736x/5a/a2/ca/5aa2ca5b6a7728f45f1da9e9e70d2eb9.jpg",
          calories: "320 cal",
          prepTime: "35 mins",
          type: "nonveg"
        },
        common: {
          title: "Bhindi Masala",
          desc: "Okra cooked with spices",
          img: "https://i.pinimg.com/736x/0c/67/2b/0c672b0b8d7e45e9b194366bdbfd7897.jpg",
          calories: "220 cal",
          prepTime: "20 mins",
          type: "veg"
        }
      }
    },
    'FRIDAY': {
      date: "15 Dec",
      lunch: {
        time: "12:30 PM - 2:30 PM",
        nonVeg: {
          title: "Fish Curry",
          desc: "Fish in coconut tamarind gravy",
          img: "https://i.pinimg.com/736x/52/24/03/52240335937427ee3c6c6de7a0f53fe9.jpg",
          calories: "300 cal",
          prepTime: "30 mins",
          type: "nonveg"
        },
        common: {
          title: "Sambar Rice",
          desc: "Rice with lentil vegetable stew",
          img: "https://i.pinimg.com/736x/6d/3f/b6/6d3fb63b0f98456bcf1f8f2c5cd2c782.jpg",
          calories: "350 cal",
          prepTime: "35 mins",
          type: "veg"
        }
      },
      dinner: {
        time: "7:30 PM - 9:30 PM",
        nonVeg: {
          title: "Chicken Korma",
          desc: "Mild chicken curry with nuts",
          img: "https://i.pinimg.com/736x/b2/6a/d9/b26ad96da7983d5b7e1b9f3a79831286.jpg",
          calories: "420 cal",
          prepTime: "45 mins",
          type: "nonveg"
        },
        common: {
          title: "Navratan Korma",
          desc: "Mixed vegetables in creamy gravy",
          img: "https://i.pinimg.com/736x/9e/8a/9d/9e8a9d8c61f04635ff1adfb20787049f.jpg",
          calories: "380 cal",
          prepTime: "40 mins",
          type: "veg"
        }
      }
    },
    'SATURDAY': {
      date: "16 Dec",
      lunch: {
        time: "12:30 PM - 2:30 PM",
        nonVeg: {
          title: "Special Chicken Biryani",
          desc: "Aromatic rice with chicken and spices",
          img: "https://i.pinimg.com/736x/2a/8e/57/2a8e57bc82908377e58203bfd9f95e84.jpg",
          calories: "500 cal",
          prepTime: "50 mins",
          type: "nonveg"
        },
        common: {
          title: "Veg Pulao",
          desc: "Fragrant rice with vegetables",
          img: "https://i.pinimg.com/736x/78/4d/21/784d215a96e5a2726c18b7c5bc35ca79.jpg",
          calories: "350 cal",
          prepTime: "35 mins",
          type: "veg"
        }
      },
      dinner: {
        time: "7:30 PM - 9:30 PM",
        nonVeg: {
          title: "Mutton Korma",
          desc: "Rich mutton curry with cream",
          img: "https://i.pinimg.com/736x/89/d8/66/89d866809f76b8be1b4689e8eb4d2bb3.jpg",
          calories: "480 cal",
          prepTime: "55 mins",
          type: "nonveg"
        },
        common: {
          title: "Palak Paneer",
          desc: "Paneer in spinach gravy",
          img: "https://i.pinimg.com/736x/9e/8a/9d/9e8a9d8c61f04635ff1adfb20787049f.jpg",
          calories: "320 cal",
          prepTime: "30 mins",
          type: "veg"
        }
      }
    }
  }

  const MealCard = ({ meal, mealType, day }) => {
    const colorScheme = dayColors[day]
    
    return (
      <TouchableOpacity 
        onPress={() => {
          setSelectedMeal({ meal, mealType, day })
          setModalVisible(true)
        }}
        className="bg-white rounded-xl p-4 mb-3 border border-gray-200 shadow-sm"
      >
        <View className="flex-row items-center mb-3">
          {mealType === 'lunch' ? (
            <Icon name="sun" color="#F59E0B" size={18} />
          ) : (
            <Icon name="moon" color="#4F46E5" size={18} />
          )}
          <Text className="font-bold text-gray-800 ml-2">
            {mealType === 'lunch' ? 'Lunch' : 'Dinner'}
          </Text>
          <View className="ml-2 px-2 py-1 bg-gray-100 rounded-full">
            <Text className="text-xs text-gray-600">{meal.time}</Text>
          </View>
          <Icon name="chevron-right" color="#6B7280" size={16} className="ml-auto" />
        </View>

        <View className="flex-row">
          {/* Non-Veg Dish */}
          <View className="flex-1 mr-2">
            <View className="flex-row items-center mb-1">
              <View className="w-2 h-2 bg-red-500 rounded-full mr-1" />
              <Text className="text-xs font-semibold text-gray-600">Non-Veg</Text>
            </View>
            <Image
              source={{ uri: meal.nonVeg.img }}
              className="w-full h-20 rounded-lg mb-2"
              resizeMode="cover"
            />
            <Text className="font-bold text-gray-800 text-sm">{meal.nonVeg.title}</Text>
            <Text className="text-gray-500 text-xs mt-1" numberOfLines={2}>
              {meal.nonVeg.desc}
            </Text>
          </View>

          {/* Common/Veg Dish */}
          <View className="flex-1 ml-2">
            <View className="flex-row items-center mb-1">
              <View className="w-2 h-2 bg-green-500 rounded-full mr-1" />
              <Text className="text-xs font-semibold text-gray-600">Common</Text>
            </View>
            <Image
              source={{ uri: meal.common.img }}
              className="w-full h-20 rounded-lg mb-2"
              resizeMode="cover"
            />
            <Text className="font-bold text-gray-800 text-sm">{meal.common.title}</Text>
            <Text className="text-gray-500 text-xs mt-1" numberOfLines={2}>
              {meal.common.desc}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <View className="flex-row items-center">
            <Icon name="fire" color="#F97316" size={14} />
            <Text className="text-xs text-gray-600 ml-1">
              {meal.nonVeg.calories} • {meal.common.calories}
            </Text>
          </View>
          <View className="flex-row items-center">
            <Icon name="clock" color="#3B82F6" size={14} />
            <Text className="text-xs text-gray-600 ml-1">{meal.nonVeg.prepTime}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const DaySection = ({ day }) => {
    const colorScheme = dayColors[day]
    const dayData = weeklyMenu[day]
    
    return (
      <View className="mb-6">
        <View className="flex-row items-center mb-3">
          <View className={`w-10 h-10 rounded-full items-center justify-center ${colorScheme.bg} mr-3`}>
            <Text className="text-white font-bold">{day.slice(0, 1)}</Text>
          </View>
          <View>
            <Text className="font-bold text-xl text-gray-800">{day}</Text>
            <Text className="text-gray-500">{dayData.date}</Text>
          </View>
        </View>

        <MealCard meal={dayData.lunch} mealType="lunch" day={day} />
        <MealCard meal={dayData.dinner} mealType="dinner" day={day} />
      </View>
    )
  }

  return (
    <StackWraper>
      <SubNavigationHeader navigation={navigation} title="Weekly Menu" />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Menu Cycle Info */}
        <View className="bg-blue-50 mx-4 mt-4 p-4 rounded-xl border border-blue-100">
          <View className="flex-row items-center mb-2">
            <Icon name="arrows-rotate" color="#3B82F6" size={18} />
            <Text className="font-bold text-blue-800 ml-2">Menu Cycle Information</Text>
          </View>
          <Text className="text-blue-700 text-sm mb-3">
            This menu changes 3 times every month for variety. Current cycle: {menuCycles[menuCycle-1].period}
          </Text>
          
          <View className="flex-row">
            {menuCycles.map((cycle) => (
              <TouchableOpacity
                key={cycle.id}
                onPress={() => setMenuCycle(cycle.id)}
                className={`flex-1 mx-1 px-3 py-2 rounded-lg ${
                  menuCycle === cycle.id ? 'bg-blue-600' : 'bg-blue-100'
                }`}
              >
                <Text className={`text-center text-sm font-medium ${
                  menuCycle === cycle.id ? 'text-white' : 'text-blue-700'
                }`}>
                  {cycle.period}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Weekly Schedule */}
        <View className="mx-4 mt-6">
          <View className="flex-row items-center mb-4">
            <Icon name="calendar" color="#4B5563" size={20} />
            <Text className="font-bold text-gray-800 text-lg ml-2">This Week's Schedule</Text>
            <TouchableOpacity className="ml-auto">
              <Icon name="circle-info" color="#6B7280" size={18} />
            </TouchableOpacity>
          </View>

          {/* Days List */}
          {Object.keys(weeklyMenu).map((day) => (
            <DaySection key={day} day={day} />
          ))}
        </View>

        {/* Weekly Summary */}
        <View className="mx-4 mb-8 mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <Text className="font-bold text-gray-800 text-lg mb-3">Weekly Summary</Text>
          <View className="flex-row flex-wrap">
            <View className="w-1/2 mb-3">
              <Text className="text-gray-500 text-sm">Total Meals</Text>
              <Text className="font-bold text-gray-800 text-xl">14</Text>
            </View>
            <View className="w-1/2 mb-3">
              <Text className="text-gray-500 text-sm">Non-Veg Dishes</Text>
              <Text className="font-bold text-red-600 text-xl">14</Text>
            </View>
            <View className="w-1/2">
              <Text className="text-gray-500 text-sm">Common Dishes</Text>
              <Text className="font-bold text-green-600 text-xl">14</Text>
            </View>
            <View className="w-1/2">
              <Text className="text-gray-500 text-sm">Avg Prep Time</Text>
              <Text className="font-bold text-blue-600 text-xl">35 mins</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Meal Details Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-3xl p-6 max-h-3/4">
            {selectedMeal && (
              <>
                <View className="flex-row items-center justify-between mb-4">
                  <View className="flex-row items-center">
                    <View className={`w-10 h-10 rounded-full items-center justify-center ${dayColors[selectedMeal.day].bg} mr-3`}>
                      <Text className="text-white font-bold">{selectedMeal.day.slice(0, 1)}</Text>
                    </View>
                    <View>
                      <Text className="font-bold text-xl text-gray-800">{selectedMeal.day}</Text>
                      <Text className="text-gray-500">
                        {selectedMeal.mealType === 'lunch' ? 'Lunch' : 'Dinner'}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text className="text-blue-500 font-bold">Close</Text>
                  </TouchableOpacity>
                </View>

                <View className="flex-row mb-6">
                  <View className="flex-1 mr-3">
                    <Text className="font-bold text-gray-800 text-lg mb-2">Non-Veg Dish</Text>
                    <Image
                      source={{ uri: selectedMeal.meal.nonVeg.img }}
                      className="w-full h-40 rounded-xl mb-3"
                      resizeMode="cover"
                    />
                    <Text className="font-bold text-gray-800 text-xl mb-2">
                      {selectedMeal.meal.nonVeg.title}
                    </Text>
                    <Text className="text-gray-600 mb-3">
                      {selectedMeal.meal.nonVeg.desc}
                    </Text>
                    <View className="flex-row items-center">
                      <View className="flex-row items-center mr-4">
                        <Icon name="fire" color="#F97316" size={16} />
                        <Text className="ml-1 text-gray-600">{selectedMeal.meal.nonVeg.calories}</Text>
                      </View>
                      <View className="flex-row items-center">
                        <Icon name="clock" color="#3B82F6" size={16} />
                        <Text className="ml-1 text-gray-600">{selectedMeal.meal.nonVeg.prepTime}</Text>
                      </View>
                    </View>
                  </View>

                  <View className="flex-1 ml-3">
                    <Text className="font-bold text-gray-800 text-lg mb-2">Common Dish</Text>
                    <Image
                      source={{ uri: selectedMeal.meal.common.img }}
                      className="w-full h-40 rounded-xl mb-3"
                      resizeMode="cover"
                    />
                    <Text className="font-bold text-gray-800 text-xl mb-2">
                      {selectedMeal.meal.common.title}
                    </Text>
                    <Text className="text-gray-600 mb-3">
                      {selectedMeal.meal.common.desc}
                    </Text>
                    <View className="flex-row items-center">
                      <View className="flex-row items-center mr-4">
                        <Icon name="fire" color="#F97316" size={16} />
                        <Text className="ml-1 text-gray-600">{selectedMeal.meal.common.calories}</Text>
                      </View>
                      <View className="flex-row items-center">
                        <Icon name="clock" color="#3B82F6" size={16} />
                        <Text className="ml-1 text-gray-600">{selectedMeal.meal.common.prepTime}</Text>
                      </View>
                    </View>
                  </View>
                </View>

                <TouchableOpacity className="bg-blue-600 py-3 rounded-xl items-center mt-4">
                  <Text className="text-white font-bold text-lg">Pre-order This Meal</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </StackWraper>
  )
}

export default DailyMenuScreen
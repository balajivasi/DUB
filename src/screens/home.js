import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Search, TrendingUp, TrendingDown, Mail, ChevronRight } from 'lucide-react-native';

const DubHomeScreen = () => {
    const todaysMoves = [
        {
            id: 1,
            icon: <TrendingUp size={30} color="#ffcc66" />,
            text: "Ackman bought QCOM",
            percentage: "+3%",
            isPositive: true
        },
        {
            id: 2,
            icon: <TrendingDown size={30} color="#ff3333" />,
            text: "Greenblatt exited TGT",
            percentage: "-3%",
            isPositive: false
        }
    ];

    const recentFilings = [
        {
            date: "07/02/2025",
            name: "Bill Ackman",
            company: "Pershing Square"
        },
        {
            date: "07/01/2025",
            name: "David Tepper",
            company: "Appaloosa"
        },
        {
            date: "06/30/2025",
            name: "Chris Hohn",
            company: "TCI Fund Manag."
        }
    ];

    return (
        <ScrollView className="min-h-screen">
            <View className="flex-1">
                {/* Header */}
                <View className="pt-5 pb-6 items-center">
                    <Text className="text-6xl font-bold text-gray-900">DUB</Text>
                </View>

                {/* Search Bar */}
                <View className="mb-4 px-4">
                    <LinearGradient
                        colors={['#ff6633', '#ffcc00']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        className="flex-row items-center p-1 rounded-xl"
                    >
                        <Search size={30} color="white" className="mr-1 ml-2" />
                        <TextInput
                            placeholder="Search investors or stocks"
                            placeholderTextColor="white"
                            className="flex-1 text-white text-2xl font-medium"
                        />
                    </LinearGradient>
                </View>


                {/* Buffett Alert */}
                <TouchableOpacity className="w-full mb-8 px-4">
                    <LinearGradient
                        colors={['#ff6633', '#ffcc00']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        className="flex-row items-center p-5 rounded-xl"
                    >
                        <Text className="text-white font-bold text-xl flex-1">BUFFETT JUST ADDED OXY (7.2%)</Text>
                        <ChevronRight size={20} color="white" />
                    </LinearGradient>
                </TouchableOpacity>

                {/* Today's Moves */}
                <View className="mb-8 px-4">
                    <Text className="text-3xl font-bold text-gray-900 mb-4">Today's Moves</Text>
                    <View className="space-y-3">
                        {todaysMoves.map((move) => (
                            <TouchableOpacity key={move.id} className="w-full">
                                <View className="rounded-2xl px-4 py-4 flex-row items-center justify-between bg-tealAccent">
                                    <View className="flex-row items-center flex-1">
                                        <View className="mr-3">{move.icon}</View>
                                        <Text className="text-white font-semibold text-2xl flex-1">
                                            {move.text}
                                        </Text>
                                    </View>
                                    {move.percentage ? (
                                        <View className="bg-redSoft rounded-full px-3 py-1">
                                            <Text className="text-white font-bold text-sm">
                                                {move.percentage}
                                            </Text>
                                        </View>
                                    ) : null}
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Recent 13F Filings */}
                <View className="mb-8 px-4">
                    <Text className="text-2xl font-bold text-gray-900 mb-4">Recent 13F Filings</Text>
                    <View className="space-y-1">
                        {recentFilings.map((filing, index) => (
                            <TouchableOpacity key={index} className="w-full">
                                <View className="flex-row items-center py-1">
                                    <Text className="text-gray-600 text-base w-24">{filing.date}</Text>
                                    <Text className="text-gray-900 font-medium text-base flex-1 mx-4">
                                        {filing.name}
                                    </Text>
                                    <Text className="text-gray-600 text-base text-right">
                                        {filing.company}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Email Signup */}
                <TouchableOpacity className="w-full mb-8 px-4">
                    <View className="bg-navyDark rounded-2xl px-4 py-4 flex-row">
                        <Mail size={30} color="#FDE047" className="mr-3" />
                        <Text className="text-white font-semibold text-2xl">
                            Get weekly summary via email
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* Bottom spacing */}
                <View className="h-8" />
            </View>
        </ScrollView>
    );
};

export default DubHomeScreen;
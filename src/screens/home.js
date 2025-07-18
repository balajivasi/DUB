import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Mail } from 'lucide-react-native';

import GradientSearchBar from '../components/GradientSearchBar';
import GradientBanner from '../components/GradientBanner';
import TodaysMoveItem from '../components/TodaysMoveItem';
import RecentFilingItem from '../components/RecentFilingItem';

const DubHomeScreen = () => {
    const todaysMoves = [
        {
            id: 1,
            icon: 'up',
            text: "Ackman bought QCOM",
            percentage: "+3%",
        },
        {
            id: 2,
            icon: 'down',
            text: "Greenblatt exited TGT",
            percentage: "-3%",
        },
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
        <ScrollView className="min-h-screen mx-3">
            <View className="flex-1">
                {/* Header */}
                <View className="pb-6 items-center">
                    <Text className="text-6xl font-bold text-gray-900">DUB</Text>
                </View>

                {/* Search Bar */}
                <GradientSearchBar />

                {/* Buffett Banner */}
                <TouchableOpacity className="w-full">
                    <GradientBanner text="BUFFETT JUST ADDED OXY (7.2%)" />
                </TouchableOpacity>

                {/* Today's Moves */}
                <View className="my-3">
                    <Text className="text-2xl font-bold text-gray-900 mb-4">Today's Moves</Text>
                    <View className="space-y-3">
                        {todaysMoves.map((move) => (
                            <TodaysMoveItem key={move.id} {...move} />
                        ))}
                    </View>
                </View>

                {/* Recent 13F Filings */}
                <View className="mb-3">
                    <Text className="text-2xl font-bold text-gray-900 mb-3">Recent 13F Filings</Text>
                    <View className="space-y-1">
                        {recentFilings.map((filing, index) => (
                            <RecentFilingItem key={index} {...filing} />
                        ))}
                    </View>
                </View>

                {/* Email Signup */}
                <TouchableOpacity className="w-full mb-8">
                    <View className="bg-navyDark rounded-2xl px-4 py-4 flex-row">
                        <Mail size={30} color="#FDE047" className="mr-3" />
                        <Text className="text-white font-semibold text-xl">
                            Get weekly summary via email
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default DubHomeScreen;

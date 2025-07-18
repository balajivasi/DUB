// TodaysMoveItem.jsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TodaysMoveItem = ({ icon, text, percentage }) => (
    <TouchableOpacity className="w-full">
        <View className="rounded-2xl px-4 py-4 flex-row items-center justify-between bg-tealAccent">
            <View className="flex-row items-center flex-1">
                <View className="mr-3">{icon}</View>
                <Text className="text-white font-semibold text-xl flex-1">{text}</Text>
            </View>
            {percentage && (
                <View className="bg-redSoft rounded-full px-3 py-1">
                    <Text className="text-white font-bold text-sm">{percentage}</Text>
                </View>
            )}
        </View>
    </TouchableOpacity>
);

export default TodaysMoveItem;
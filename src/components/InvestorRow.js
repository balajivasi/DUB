// components/InvestorRow.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

const InvestorRow = ({ name, fund, onPress }) => (
    <TouchableOpacity
        className="flex-row items-center justify-between py-3  border-b border-gray-100 bg-white"
        onPress={onPress}
    >
        <View className="flex-1">
            <Text className="text-xl font-semibold text-blue-900 mb-1">{name}</Text>
            <Text className="text-lg text-orangeAccent">{fund}</Text>
        </View>
        <ChevronRight className="w-6 h-6 text-slateGray" />
    </TouchableOpacity>
);

export default InvestorRow;

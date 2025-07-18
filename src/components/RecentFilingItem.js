// RecentFilingItem.jsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RecentFilingItem = ({ date, name, company }) => (
  <TouchableOpacity className="w-full">
    <View className="flex-row items-center py-1">
      <Text className="text-gray-600 text-base w-24">{date}</Text>
      <Text className="text-gray-900 font-medium text-base flex-1 mx-4">{name}</Text>
      <Text className="text-gray-600 text-base text-right">{company}</Text>
    </View>
  </TouchableOpacity>
);

export default RecentFilingItem;
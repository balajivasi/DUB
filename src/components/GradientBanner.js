// GradientBanner.jsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ChevronRight } from 'lucide-react-native';

const GradientBanner = ({ text }) => (
    <TouchableOpacity className="w-full">
        <LinearGradient
            colors={["#ff6633", "#ffcc00"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="flex-row items-center rounded-xl mt-3"
        >
            <View className="p-3 w-full">
                <Text className="text-white font-bold text-base flex-1">{text}</Text>
                <ChevronRight size={20} color="white" className="float-right" />
            </View>
        </LinearGradient>
    </TouchableOpacity>
);

export default GradientBanner;

// EmailSignupBox.jsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Mail } from 'lucide-react-native';

const EmailSignupBox = () => (
    <TouchableOpacity className="w-full mb-8">
        <View className="bg-navyDark rounded-2xl px-4 py-4 flex-row">
            <Mail size={30} color="#FDE047" className="mr-3" />
            <Text className="text-white font-semibold text-xl">
                Get weekly summary via email
            </Text>
        </View>
    </TouchableOpacity>
);

export default EmailSignupBox;
// GradientSearchBar.jsx
import React from 'react';
import { TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Search } from 'lucide-react-native';

const GradientSearchBar = () => (
    <LinearGradient
        colors={["#ff6633", "#ffcc00"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="flex-row items-center rounded-xl"
    >
        <Search size={30} color="white" className="mr-1 ml-2" />
        <TextInput
            placeholder="Search investors or stocks"
            placeholderTextColor="white"
            className="flex-1 h-16 text-white text-2xl font-medium"
        />
    </LinearGradient>
);

export default GradientSearchBar;
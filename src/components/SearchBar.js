// components/SearchBar.js
import React from 'react';
import { View, TextInput } from 'react-native';
import { Search } from 'lucide-react-native';

const SearchBar = ({ searchTerm, onChange }) => (
    <View className="relative">
        <View className="absolute left-0 top-3 z-10">
            <Search size={30} color="#ff6666" className="mr-1 ml-2" />
        </View>
        <TextInput
            placeholder="Search"
            value={searchTerm}
            onChangeText={onChange}
            className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl text-lg text-slateGray placeholder-slateGray"
        />
    </View>
);

export default SearchBar;

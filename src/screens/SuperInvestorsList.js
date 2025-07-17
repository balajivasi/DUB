import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Search, ChevronRight } from 'lucide-react-native';

const superinvestors = [
    { name: 'Bill Ackman', fund: 'Pershing Square' },
    { name: 'David Tepper', fund: 'Appaloosa' },
    { name: 'Seth Klarman', fund: 'The Baupost Group' },
    { name: 'Mohnish Pabrai', fund: 'Pabrai Funds' },
    { name: 'Warren Buffett', fund: 'Berkshire Hathaway' },
    { name: 'Charlie Munger', fund: 'Daily Journal' },
    { name: 'Jeffrey Ubben', fund: 'Inclusive Capital' }
];

const InvestorRow = ({ name, fund, onPress }) => (
    <TouchableOpacity
        className="flex-row items-center justify-between py-6 px-6 border-b border-gray-100 bg-white"
        onPress={onPress}
    >
        <View className="flex-1">
            <Text className="text-xl font-semibold text-blue-900 mb-1">{name}</Text>
            <Text className="text-lg text-orange-500">{fund}</Text>
        </View>
        <ChevronRight className="w-6 h-6 text-gray-400" />
    </TouchableOpacity>
);

const SuperInvestorsList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredInvestors = superinvestors.filter(investor =>
        investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        investor.fund.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInvestorPress = (investor) => {
        console.log(`Navigate to ${investor.name} profile`);
    };

    return (
        <View className="bg-white min-h-screen w-full">
            {/* Header */}
            <View className="px-6 pt-10 pb-6">
                <Text className="text-4xl font-bold text-purple-800 mb-6">Superinvestors</Text>

                {/* Search Bar */}
                <View className="relative">
                    <View className="absolute left-4 top-3">
                        <Search className="w-5 h-5 text-gray-400" />
                    </View>
                    <TextInput
                        placeholder="Search"
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                        className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl text-lg text-gray-700 placeholder-gray-400"
                    />
                </View>
            </View>

            {/* Investors List */}
            <ScrollView className="flex-1">
                {filteredInvestors.length > 0 ? (
                    filteredInvestors.map((investor, index) => (
                        <InvestorRow
                            key={index}
                            name={investor.name}
                            fund={investor.fund}
                            onPress={() => handleInvestorPress(investor)}
                        />
                    ))
                ) : (
                    <View className="items-center justify-center py-12">
                        <Search className="w-12 h-12 text-gray-300 mb-4" />
                        <Text className="text-gray-500 text-lg">No investors found</Text>
                        <Text className="text-gray-400 text-sm mt-1">Try adjusting your search</Text>
                    </View>
                )}
            </ScrollView>

            {/* Home Indicator */}
            <View className="items-center py-4">
                <View className="w-32 h-1 bg-black rounded-full" />
            </View>
        </View>
    );
};

export default SuperInvestorsList;

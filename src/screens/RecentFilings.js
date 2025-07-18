import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const FilingItem = ({ date, name, company }) => (
    <View className="flex-row justify-between py-4 border-b border-gray-100">
        <View className="flex-1">
            <Text className="text-orange-500 font-medium text-sm mb-1">{date}</Text>
            <Text className="text-gray-900 font-semibold text-base">{name}</Text>
        </View>
        <View className="flex-1 items-end">
            <Text className="text-gray-900 font-semibold text-base">{company}</Text>
        </View>
    </View>
);

const RecentFilings = () => {
    const filings = [
        { date: "07/02/2025", name: "Bill Ackman", company: "Pershing Square" },
        { date: "07/02/2025", name: "Warren Buffett", company: "Palestra Capital" },
        { date: "09/01/2025", name: "David Tepper", company: "Palestra Capital" },
        { date: "06/01/2025", name: "Lisa Kutter", company: "Semper Augustus" },
        { date: "06/30/2025", name: "Christopher Bloomstran", company: "TCI Fund Management" },
        { date: "06/30/2025", name: "Chris Hohn", company: "Pabrai Funds" },
        { date: "06/30/2025", name: "Mohnish Pabrai", company: "Trian Partners" }
    ];

    return (
        <ScrollView className="min-h-screen mx-3">
            {/* Header */}
            <View className="pt-4 pb-6 ">
                <Text className="text-3xl font-bold text-purple-800 text-center">
                    Recent 13F Filings
                </Text>
            </View>

            {/* Filings List */}
            <View >
                {filings.map((filing, index) => (
                    <FilingItem
                        key={index}
                        date={filing.date}
                        name={filing.name}
                        company={filing.company}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export default RecentFilings;

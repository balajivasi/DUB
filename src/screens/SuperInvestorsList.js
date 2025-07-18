// screens/SuperInvestorsList.js
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Search } from 'lucide-react-native';
import { styled } from 'nativewind';
import InvestorRow from '../components/InvestorRow';
import SearchBar from '../components/SearchBar';

const StyledView = styled(View);
const StyledText = styled(Text);

const superinvestors = [
    { name: 'Bill Ackman', fund: 'Pershing Square' },
    { name: 'David Tepper', fund: 'Appaloosa' },
    { name: 'Seth Klarman', fund: 'The Baupost Group' },
    { name: 'Mohnish Pabrai', fund: 'Pabrai Funds' },
    { name: 'Warren Buffett', fund: 'Berkshire Hathaway' },
    { name: 'Charlie Munger', fund: 'Daily Journal' },
    { name: 'Jeffrey Ubben', fund: 'Inclusive Capital' }
];

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
        <StyledView className=" min-h-screen mx-3">
            {/* Header */}
            <StyledView className=" pt-3 pb-3">
                <StyledText className="text-4xl font-bold text-violetCustom mb-3">Superinvestors</StyledText>
                <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />
            </StyledView>

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
                    <StyledView className="items-center justify-center py-12">
                        <Search className="w-12 h-12 text-slateGray mb-4" />
                        <StyledText className="text-slateGray text-lg">No investors found</StyledText>
                        <StyledText className="text-slateGray text-sm mt-1">Try adjusting your search</StyledText>
                    </StyledView>
                )}
            </ScrollView>

            {/* Home Indicator */}
            <StyledView className="items-center py-4">
                <StyledView className="w-32 h-1 bg-black rounded-full" />
            </StyledView>
        </StyledView>
    );
};

export default SuperInvestorsList;

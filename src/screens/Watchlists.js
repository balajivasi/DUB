import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronRight, Plus } from 'lucide-react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const WatchlistItem = ({ children, showChevron = true }) => (
    <StyledView className="flex-row items-center justify-between py-4 px-4 border-b border-gray-200 last:border-b-0">
        <StyledView className="flex-row items-center flex-1">
            {children}
        </StyledView>
        {showChevron && <ChevronRight className="w-5 h-5 text-gray-400" />}
    </StyledView>
);

const InvestorItem = ({ name }) => (
    <WatchlistItem>
        <StyledView className="w-6 h-6 bg-yellow-400 rounded-full mr-3" />
        <StyledText className="text-gray-900 font-medium text-lg">{name}</StyledText>
    </WatchlistItem>
);

const StockItem = ({ name, ticker }) => (
    <WatchlistItem>
        <StyledText className="text-gray-900 font-medium text-lg">{name} \ {ticker}</StyledText>
    </WatchlistItem>
);

const Watchlists = () => {
    const investors = [
        { name: 'Investor name' },
        { name: 'Investor name' },
    ];

    const stocks = [
        { name: 'Stock name', ticker: 'Ticker' },
        { name: 'Stock name', ticker: 'Ticker' },
        { name: 'Stock name', ticker: 'Ticker' },
    ];

    return (
        <ScrollView className="min-h-screen mx-3">
            {/* Header */}
            <StyledView className="pt-3 pb-3">
                <StyledText className="text-3xl font-bold text-purple-800 text-center">
                    Watchlists
                </StyledText>
            </StyledView>

            {/* Add Button */}
            <StyledView className="pb-3">
                <StyledTouchableOpacity className="w-full bg-yellow-400 rounded-lg py-4 px-4 flex-row items-center justify-center border-2 border-gray-900">
                    <Plus className="w-5 h-5 text-gray-900 mr-2" />
                    <StyledText className="text-gray-900 font-semibold text-lg">Add watchlist</StyledText>
                </StyledTouchableOpacity>
            </StyledView>

            {/* Investors */}
            <StyledView className="pb-3">
                <StyledText className="text-2xl font-bold text-gray-900 mb-4">Investors</StyledText>
                <StyledView className="border-2 border-gray-900 rounded-lg overflow-hidden">
                    {investors.map((investor, index) => (
                        <InvestorItem key={index} name={investor.name} />
                    ))}
                </StyledView>
            </StyledView>

            {/* Stocks */}
            <StyledView className="pb-3">
                <StyledText className="text-2xl font-bold text-gray-900 mb-4">Stocks</StyledText>
                <StyledView className="border-2 border-gray-900 rounded-lg overflow-hidden">
                    {stocks.map((stock, index) => (
                        <StockItem key={index} name={stock.name} ticker={stock.ticker} />
                    ))}
                </StyledView>
            </StyledView>
        </ScrollView>
    );
};

export default Watchlists;
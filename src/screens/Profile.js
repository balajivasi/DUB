import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Bell, TrendingUp, TrendingDown } from 'lucide-react-native';
import { styled } from 'nativewind';

import PortfolioRow from '../components/PortfolioRow';
import UserHeader from '../components/UserHeader';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);

const Profile = () => {
    const [portfolioData, setPortfolioData] = useState([
        { stock: 'AAPL', avgPrice: 145.23, currentPrice: 202.3, weight: 12.5 },
        { stock: 'HLT', avgPrice: 118.0, currentPrice: 162.45, weight: 9.8 },
        { stock: 'CMG', avgPrice: 1450.0, currentPrice: 2120.5, weight: 15.2 },
    ]);
    const [isStarred, setIsStarred] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setPortfolioData(prev =>
                prev.map(stock => ({
                    ...stock,
                    currentPrice: stock.currentPrice + (Math.random() - 0.5) * 2,
                }))
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const formatPrice = price => price.toFixed(2);
    const getPerformanceColor = (avg, current) => (current > avg ? 'text-green-400' : 'text-red-400');

    return (
        <ScrollView className="min-h-screen mx-3">
            <StyledView className="py-3">
                <StyledText className="text-4xl font-bold text-violetCustom mb-3">Dub</StyledText>
                <UserHeader isStarred={isStarred} setIsStarred={setIsStarred} />
            </StyledView>
            {/* Latest Activity */}
            <StyledView className="py-3">
                <StyledText className="text-xl font-bold text-coolGray mb-3">Latest Activity</StyledText>
                <StyledView className="space-y-3">
                    <StyledView className="bg-darkGreen rounded-2xl p-4 flex-row items-center">
                        <TrendingUp size={24} className="text-white mr-3" />
                        <StyledText className="text-white font-semibold text-lg">Added NVDA (+3%)</StyledText>
                    </StyledView>
                    <StyledView className="bg-orangeAccent rounded-2xl p-4 flex-row items-center">
                        <TrendingDown size={24} className="text-white mr-3" />
                        <StyledText className="text-white font-semibold text-lg">Reduced AAPL (-1.5%)</StyledText>
                    </StyledView>
                </StyledView>
            </StyledView>
            {/* Full Portfolio */}
            <StyledView className="py-3">
                <StyledText className="text-xl font-bold text-coolGray mb-3">Full Portfolio</StyledText>
                <StyledView className="bg-violetCustom rounded-xl p-4">
                    <StyledView className="flex-row justify-between py-2 border-b border-purple-600 mb-2">
                        <StyledText className="flex-1 text-yellowAccent font-bold">Stock</StyledText>
                        <StyledText className="flex-1 text-center text-yellowAccent font-bold">Avg Price</StyledText>
                        <StyledText className="flex-1 text-center text-yellowAccent font-bold">Current Price</StyledText>
                        <StyledText className="flex-1 text-right text-yellowAccent font-bold">% Weight</StyledText>
                    </StyledView>
                    {portfolioData.map((stock, index) => (
                        <PortfolioRow
                            key={index}
                            {...stock}
                            formatPrice={formatPrice}
                            getPerformanceColor={getPerformanceColor}
                        />
                    ))}
                </StyledView>
            </StyledView>
            {/* Last 13F Filings */}
            <StyledView className="mb-0">
                <StyledText className="text-xl font-bold text-coolGray mb-3">Last 13F Filings</StyledText>
            </StyledView>
            {/* Set Alert Button */}
            <StyledView className="mb-8">
                <StyledTouchable className="w-full bg-yellowAccent py-4 rounded-xl flex-row justify-center items-center space-x-2">
                    <Bell size={30} className="text-navyBlue" />
                    <StyledText className="text-navyBlue text-2xl">Set Alert for NVDA</StyledText>
                </StyledTouchable>
            </StyledView>
        </ScrollView>
    );
};

export default Profile;

import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Bell, Star, TrendingUp, TrendingDown } from 'lucide-react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchable = styled(TouchableOpacity);

const Profile = () => {
    const [portfolioData, setPortfolioData] = useState([
        { stock: 'AAPL', avgPrice: 145.23, currentPrice: 202.30, weight: 12.5 },
        { stock: 'HLT', avgPrice: 118.00, currentPrice: 162.45, weight: 9.8 },
        { stock: 'CMG', avgPrice: 1450.00, currentPrice: 2120.50, weight: 15.2 },
    ]);
    const [isStarred, setIsStarred] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setPortfolioData(prev =>
                prev.map(stock => ({
                    ...stock,
                    currentPrice: stock.currentPrice + (Math.random() - 0.5) * 2
                }))
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const formatPrice = price => price.toFixed(2);
    const formatLargePrice = price => price.toFixed(2);

    const getPerformanceColor = (avg, current) => {
        return current > avg ? 'text-green-400' : 'text-red-400';
    };

    const PortfolioRow = ({ stock, avgPrice, currentPrice, weight }) => (
        <StyledView className="flex-row justify-between py-2">
            <StyledText className="flex-1 text-yellow-400 font-medium">{stock}</StyledText>
            <StyledText className="flex-1 text-yellow-400 text-center">{formatLargePrice(avgPrice)}</StyledText>
            <StyledText className={`flex-1 text-center ${getPerformanceColor(avgPrice, currentPrice)}`}>
                {formatLargePrice(currentPrice)}
            </StyledText>
            <StyledText className="flex-1 text-right text-yellow-400">{weight}%</StyledText>
        </StyledView>
    );

    return (
        <ScrollView className="bg-white min-h-screen">
            <StyledView className="px-6 py-4">
                <StyledText className="text-4xl font-bold text-purple-800 mb-6">Dub</StyledText>
                <StyledView className="flex-row justify-between items-center">
                    <StyledView className="flex-row items-center space-x-4">
                        <StyledView className="w-20 h-20 rounded-full overflow-hidden bg-purple-600">
                            <StyledImage
                                source={{ uri: 'https://avatars.githubusercontent.com/u/1?v=4' }}
                                className="w-full h-full"
                            />
                        </StyledView>
                        <StyledView>
                            <StyledText className="text-2xl font-bold text-purple-800">Bill Ackman</StyledText>
                            <StyledText className="text-orange-500 text-lg">Pershing Square</StyledText>
                        </StyledView>
                    </StyledView>
                    <StyledTouchable
                        onPress={() => setIsStarred(!isStarred)}
                        className={`p-2 rounded-lg border-2 ${isStarred ? 'border-orange-500 bg-orange-50' : 'border-orange-500'}`}
                    >
                        <Star size={24} className={isStarred ? 'text-orange-500 fill-orange-500' : 'text-orange-500'} />
                    </StyledTouchable>
                </StyledView>
            </StyledView>

            <StyledView className="px-6 py-4">
                <StyledText className="text-2xl font-bold text-gray-800 mb-4">Latest Activity</StyledText>
                <StyledView className="space-y-3">
                    <StyledView className="bg-teal-500 rounded-2xl p-4 flex-row items-center">
                        <TrendingUp size={24} className="text-white mr-3" />
                        <StyledText className="text-white font-semibold text-lg">Added NVDA (+3%)</StyledText>
                    </StyledView>
                    <StyledView className="bg-orange-500 rounded-2xl p-4 flex-row items-center">
                        <TrendingDown size={24} className="text-white mr-3" />
                        <StyledText className="text-white font-semibold text-lg">Reduced AAPL (-1.5%)</StyledText>
                    </StyledView>
                </StyledView>
            </StyledView>

            <StyledView className="px-6 py-4">
                <StyledText className="text-2xl font-bold text-gray-800 mb-4">Full Portfolio</StyledText>
                <StyledView className="bg-purple-800 rounded-2xl p-4">
                    <StyledView className="flex-row justify-between py-2 border-b border-purple-600 mb-2">
                        <StyledText className="flex-1 text-yellow-400 font-bold">Stock</StyledText>
                        <StyledText className="flex-1 text-center text-yellow-400 font-bold">Avg Price</StyledText>
                        <StyledText className="flex-1 text-center text-yellow-400 font-bold">Current Price</StyledText>
                        <StyledText className="flex-1 text-right text-yellow-400 font-bold">% Weight</StyledText>
                    </StyledView>
                    {portfolioData.map((stock, index) => (
                        <PortfolioRow key={index} {...stock} />
                    ))}
                </StyledView>
            </StyledView>

            <StyledView className="px-6 py-4">
                <StyledText className="text-2xl font-bold text-gray-800 mb-4">Last 13F Filings</StyledText>
            </StyledView>

            <StyledView className="px-6 mb-8">
                <StyledTouchable className="w-full bg-yellow-400 py-4 rounded-2xl flex-row justify-center items-center space-x-2">
                    <Bell size={20} className="text-blue-900" />
                    <StyledText className="text-blue-900 font-bold text-lg">Set Alert for NVDA</StyledText>
                </StyledTouchable>
            </StyledView>


        </ScrollView>
    );
};

export default Profile;

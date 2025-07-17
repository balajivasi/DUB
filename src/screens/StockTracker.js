import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { Bell, TrendingUp, ChevronRight } from 'lucide-react-native';
import { styled } from 'nativewind';
import LinearGradient from 'react-native-linear-gradient';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);

const StockTracker = () => {
    const [currentPrice, setCurrentPrice] = useState(123.45);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPrice(prev => {
                const change = (Math.random() - 0.5) * 2;
                return Math.max(89, Math.min(140.5, prev + change));
            });
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 300);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const formatPrice = price => `$${price.toFixed(2)}`;

    const SuperinvestorRow = ({ name, fund, amount }) => (
        <StyledView className="flex-row justify-between py-2">
            <StyledView>
                <StyledText className="text-white font-medium">{name}</StyledText>
                <StyledText className="text-yellow-400 text-sm">{fund}</StyledText>
            </StyledView>
            <StyledText className="text-yellow-400 font-semibold">{amount}</StyledText>
        </StyledView>
    );

    const TradeRow = ({ date, trader, change }) => (
        <StyledView className="flex-row justify-between py-2">
            <StyledView>
                <StyledText className="text-yellow-400 text-sm font-medium">{date}</StyledText>
                <StyledText className="text-white">{trader}</StyledText>
            </StyledView>
            <StyledView className="flex-row items-center">
                <StyledText className="text-green-400 font-semibold mr-1">{change}</StyledText>
                <ChevronRight size={16} className="text-gray-400" />
            </StyledView>
        </StyledView>
    );

    return (
        <ScrollView className="bg-white min-h-screen">
            <StyledView className="px-6 py-2 flex-row justify-between items-center">
                <StyledText className="text-black font-semibold">9:41</StyledText>
                <StyledView className="flex-row space-x-1 items-center">
                    <StyledView className="flex-row space-x-1">
                        <StyledView className="w-1 h-3 bg-black rounded-full" />
                        <StyledView className="w-1 h-3 bg-black rounded-full" />
                        <StyledView className="w-1 h-3 bg-black rounded-full" />
                        <StyledView className="w-1 h-3 bg-gray-400 rounded-full" />
                    </StyledView>
                    <StyledView className="ml-2 w-4 h-4 bg-black" />
                    <StyledView className="w-6 h-3 bg-black rounded-sm" />
                </StyledView>
            </StyledView>

            <StyledView className="px-6 py-4 flex-row justify-between items-center">
                <StyledView>
                    <StyledText className="text-4xl font-bold text-blue-900">NVDA</StyledText>
                    <StyledText className="text-lg text-gray-600">NVIDIA Corporation</StyledText>
                </StyledView>
                <StyledTouchable className="bg-purple-600 px-4 py-2 rounded-full">
                    <StyledText className="text-white font-semibold">WATCH</StyledText>
                </StyledTouchable>
            </StyledView>

            <LinearGradient
                colors={['#ff6633', '#993366']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="flex-row items-center p-5 m-6 rounded-xl"
            >
                <StyledView className={isAnimating ? 'scale-105 transition-all duration-300' : 'transition-all duration-300'}>
                    <StyledText className="text-4xl font-bold text-white mb-2">{formatPrice(currentPrice)}</StyledText>
                    <StyledText className="text-lg text-white mb-2">$89.00 - $140.50</StyledText>
                    <StyledText className="text-sm text-white opacity-90">Tech • Semiconductors</StyledText>
                </StyledView>
            </LinearGradient>

            <StyledView className="mx-6  bg-blue-900 rounded-2xl p-6">
                <StyledText className="text-yellow-400 text-xl font-bold mb-4">Top Superinvestors</StyledText>
                <SuperinvestorRow name="Bill Ackman" fund="Pershing Square" amount="$850M" />
                <SuperinvestorRow name="David Tepper" fund="Appaloosa" amount="$220M" />
            </StyledView>


            <LinearGradient
                colors={['#ff6633', '#993366']}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
                className="flex-row items-center p-5 m-6 rounded-xl"
            >
                <StyledText className="text-white text-xl font-bold mb-4">Recent Trades</StyledText>
                <TradeRow date="Jul. 2, 2025" trader="Ackman bought" change="+3%" />
                <TradeRow date="Jul. 1, 2025" trader="Greenblatt" change="" />
            </LinearGradient>


            <StyledView className="mx-6 mb-8">
                <StyledTouchable className="w-full bg-yellow-400 py-4 rounded-2xl flex-row justify-center items-center space-x-2">
                    <Bell size={20} className="text-blue-900" />
                    <StyledText className="text-blue-900 font-bold text-lg">Set Alert for NVDA</StyledText>
                </StyledTouchable>
            </StyledView>

        </ScrollView>
    );
};

export default StockTracker;
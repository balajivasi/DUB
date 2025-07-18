// screens/StockTracker.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Bell } from 'lucide-react-native';
import { styled } from 'nativewind';
import LinearGradient from 'react-native-linear-gradient';
import SuperinvestorRow from '../components/SuperinvestorRow';
import TradeRow from '../components/TradeRow';

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

    return (
        <ScrollView className="min-h-screen mx-3">
            <StyledView className="my-3 flex-row justify-between items-center">
                <StyledView>
                    <StyledText className="text-5xl font-bold text-navyBlue">NVDA</StyledText>
                    <StyledText className="text-lg text-slateGray">NVIDIA Corporation</StyledText>
                </StyledView>
                <StyledTouchable className="bg-violetCustom px-4 py-2 rounded-full">
                    <StyledText className="text-white font-semibold">WATCH</StyledText>
                </StyledTouchable>
            </StyledView>

            <LinearGradient
                colors={['#ff6633', '#993366']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="flex-row items-center  rounded-xl my-3 "
            >
                <StyledView className={isAnimating ? 'scale-105 transition-all duration-300 p-3' : 'transition-all duration-300 p-3'}>
                    <StyledText className="text-4xl font-bold text-white mb-2">{formatPrice(currentPrice)}</StyledText>
                    <StyledText className="text-lg text-white mb-2">$89.00 - $140.50</StyledText>
                    <StyledText className="text-sm text-white opacity-90">Tech • Semiconductors</StyledText>
                </StyledView>
            </LinearGradient>

            <StyledView className=" bg-navyBlue rounded-xl p-3 ">
                <StyledText className="text-yellowAccent text-2xl font-bold">Top Superinvestors</StyledText>
                <SuperinvestorRow name="Bill Ackman" fund="Pershing Square" amount="$850M" />
                <SuperinvestorRow name="David Tepper" fund="Appaloosa" amount="$220M" />
            </StyledView>

            <LinearGradient
                colors={['#ff6633', '#993366']}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
                className="flex-row items-center rounded-xl my-3"
            >
                <StyledView className="p-3 w-auto">
                    <StyledText className="text-white text-2xl font-bold">Recent Trades</StyledText>
                    <TradeRow date="Jul. 2, 2025" trader="Ackman bought" change="+3%" />
                    <TradeRow date="Jul. 1, 2025" trader="Greenblatt" change="" />
                </StyledView>
            </LinearGradient>
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

export default StockTracker;

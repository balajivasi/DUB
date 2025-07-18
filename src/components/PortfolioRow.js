// components/PortfolioRow.js
import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const PortfolioRow = ({ stock, avgPrice, currentPrice, weight, formatPrice, getPerformanceColor }) => (
    <StyledView className="flex-row justify-between py-2">
        <StyledText className="flex-1 text-yellowAccent font-medium">{stock}</StyledText>
        <StyledText className="flex-1 text-yellowAccent text-center">{formatPrice(avgPrice)}</StyledText>
        <StyledText className={`flex-1 text-center ${getPerformanceColor(avgPrice, currentPrice)}`}>
            {formatPrice(currentPrice)}
        </StyledText>
        <StyledText className="flex-1 text-right text-yellowAccent">{weight}%</StyledText>
    </StyledView>
);

export default PortfolioRow;
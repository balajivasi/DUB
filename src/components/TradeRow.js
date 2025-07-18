
// components/TradeRow.js
import React from 'react';
import { View, Text } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const TradeRow = ({ date, trader, change }) => (
    <StyledView className="flex-row justify-between py-2">
        <StyledView className=" w-4/5">
            <StyledText className="text-yellowAccent text-base font-medium">{date}</StyledText>
            <StyledText className="text-white text-base">{trader}</StyledText>
        </StyledView>
        <StyledView className="flex-row items-right">
            <StyledText className="text-white font-bold text-base mr-1">{change}</StyledText>
            <ChevronRight size={16} className="text-white" />
        </StyledView>
    </StyledView>
);

export default TradeRow;
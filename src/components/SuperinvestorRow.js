// components/SuperinvestorRow.js
import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const SuperinvestorRow = ({ name, fund, amount }) => (
    <StyledView className="flex-row justify-between py-2">
        <StyledView>
            <StyledText className="text-white font-medium">{name}</StyledText>
            <StyledText className="text-yellowAccent text-sm">{fund}</StyledText>
        </StyledView>
        <StyledText className="text-yellowAccent font-semibold">{amount}</StyledText>
    </StyledView>
);

export default SuperinvestorRow;
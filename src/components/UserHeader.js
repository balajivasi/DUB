
// components/UserHeader.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Star } from 'lucide-react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchable = styled(TouchableOpacity);

const UserHeader = ({ isStarred, setIsStarred }) => (
    <StyledView className="flex-row justify-between items-center">
        <StyledView className="flex-row items-center space-x-4">
            <StyledView className="w-20 h-20 rounded-full overflow-hidden bg-violetCustom">
                <StyledImage
                    source={{ uri: 'https://avatars.githubusercontent.com/u/1?v=4' }}
                    className="w-full h-full"
                />
            </StyledView>
            <StyledView>
                <StyledText className="text-2xl font-bold text-violetCustom">Bill Ackman</StyledText>
                <StyledText className="text-orangeAccent text-lg">Pershing Square</StyledText>
            </StyledView>
        </StyledView>
        <StyledTouchable
            onPress={() => setIsStarred(!isStarred)}
            className={`p-2 rounded-lg border-2 ${isStarred ? 'border-orangeAccent bg-orange-50' : 'border-orangeAccent'}`}
        >
            <Star size={24} className={isStarred ? 'text-orangeAccent fill-orangeAccent' : 'text-orangeAccent'} />
        </StyledTouchable>
    </StyledView>
);

export default UserHeader;
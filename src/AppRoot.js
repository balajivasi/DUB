import React from "react";
import { Text, View } from "react-native";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DubHomeScreen from './screens/home';
import Profile from './screens/Profile';
import StockTracker from './screens/StockTracker';
import SuperInvestorsList from './screens/SuperInvestorsList';
import Watchlists from './screens/Watchlists';
import RecentFilings from './screens/RecentFilings';
const AppRoot = () => {
    const { t } = useTranslation();
    const { email } = useSelector((state) => state.profile);
    return (<View className="w-screen min-h-screen">
        {/*<Text className="rounded-xl bg-red-100 border border-red-400 text-red-700 px-4 py-3 w-4/5 mx-auto">
            {t('welcome')} Home {email ? email : 'No Email Provided'}
        </Text>*/}
        {/*<DubHomeScreen />
        <Profile />
        <StockTracker />
        <Watchlists />
        <RecentFilings />
        <SuperInvestorsList />*/}
        <Watchlists />
    </View>

    );
};

export default AppRoot;
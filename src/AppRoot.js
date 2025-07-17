import React from "react";
import { Text } from "react-native";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
const AppRoot = () => {
    const { t } = useTranslation();
    const { email } = useSelector((state) => state.profile);
    return (
        <Text className="rounded-xl bg-red-100 border border-red-400 text-red-700 px-4 py-3 w-4/5 mx-auto">
            Balaji {t('welcome')} {email ? email : 'No Email Provided'}
        </Text>
    );
};

export default AppRoot;
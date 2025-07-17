import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import i18n from '../../18n';
import { useDispatch } from "react-redux";
const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
    const { i18n } = useTranslation();
    const dispatch = useDispatch()
    const [language, setLanguage] = useState();

    useEffect(() => {
        setLanguage(i18n.language);
    }, [])

    const updateLanguage = useCallback((newLanguage) => {
        dispatch(setLanguage(newLanguage))
        i18n.changeLanguage(newLanguage)
    }, [i18n]);

    return <LanguageContext.Provider value={{ language, updateLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
    const { language, updateLanguage } = useContext(LanguageContext);
    return { language, updateLanguage }
}
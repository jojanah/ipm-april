import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('ar');

    if (typeof window !== 'undefined') {
        const langOnLocalStorage = localStorage.getItem("language");
        const isLangOnLocalStorage = langOnLocalStorage == 'en' || langOnLocalStorage == 'ar' ? langOnLocalStorage : 'ar';
        if (!isLangOnLocalStorage) localStorage.setItem("language", "ar");
    }
    
    const switchLanguage = () => {
        const nextLang = language == 'en' ? 'ar' : 'en'
        localStorage.setItem("language", nextLang);
        setLanguage(nextLang);
    };
    return (
        <LanguageContext.Provider value={{ language, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

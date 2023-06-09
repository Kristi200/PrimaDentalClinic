import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import english from './Lang/English.json';
import italian from './Lang/Italian.json';
import albanian from './Lang/albanian.json';


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
        en: {translation: english},
        it: {translation: italian},
        sq: {translation: albanian},
        },
        lng: "it", // if you're using a language detector, do not define the lng option
        fallbackLng: "it",

        interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    })

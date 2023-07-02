import { LANGUAGE } from "./constant";
export function setLanguage(publicLanguage) {
    return{
        type: LANGUAGE,
        publicLanguage
    }
}

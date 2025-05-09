import { Platform } from "react-native";

export const isIOS = () => {
    return Platform.OS === 'ios';
};
export const isANDROID = () => {
    return Platform.OS === 'android';
};
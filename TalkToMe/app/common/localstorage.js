import {AsyncStorage } from 'react-native';

export default class LocalStorage
{
    static async getItem(key){
        return await AsyncStorage.getItem(key);
    }
    static async setItem(key, value){
        await AsyncStorage.setItem(key,value);
    }
    static async clear() {
       await AsyncStorage.clear();
    }
}
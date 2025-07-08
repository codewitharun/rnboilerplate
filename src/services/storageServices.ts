import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeValue = async (key: string, data: string) => {
  try {
    return await AsyncStorage.setItem(key, data);
  } catch (error) {
    console.log("🚀 ~ storeValue ~ error:", error);
  }
};

export const getValue = async (data: string) => {
  try {
    return await AsyncStorage.getItem(data);
  } catch (error) {
    console.log("🚀 ~ getValue ~ error:", error);
  }
};

export const getAllKeys = async () => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (error) {
    console.log("🚀 ~ getAllKeys ~ error:", error);
  }
};

export const removeItem = async (key: string) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("🚀 ~ removeItem ~ error:", error);
  }
};

export const multiRemoveItems = async (arr: string[]) => {
  try {
    return await AsyncStorage.multiRemove(arr);
  } catch (error) {
    console.log("🚀 ~ multiRemoveItems ~ error:", error);
  }
};

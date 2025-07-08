import * as SecureStore from "expo-secure-store";

/**
 * Store a secure key-value pair
 */
export const storeValue = async (key: string, data: string) => {
  try {
    await SecureStore.setItemAsync(key, data);
  } catch (error) {
    console.log("🚀 ~ storeValue ~ error:", error);
  }
};

/**
 * Retrieve a value by key
 */
export const getValue = async (key: string): Promise<string | null> => {
  try {
    const value = await SecureStore.getItemAsync(key);
    return value ?? null;
  } catch (error) {
    console.log("🚀 ~ getValue ~ error:", error);
    return null;
  }
};

/**
 * Remove a value by key
 */
export const removeItem = async (key: string) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("🚀 ~ removeItem ~ error:", error);
  }
};

/**
 * SecureStore does not support `getAllKeys` or `multiRemove` natively.
 * You can track your keys manually using a separate "keys" list if needed.
 */
export const multiRemoveItems = async (keys: string[]) => {
  try {
    await Promise.all(keys.map((key) => SecureStore.deleteItemAsync(key)));
  } catch (error) {
    console.log("🚀 ~ multiRemoveItems ~ error:", error);
  }
};

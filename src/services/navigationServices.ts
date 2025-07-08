import { router } from "expo-router";

/**
 * Navigate to a new screen (pushes to stack)
 */
export const navigate = (path: string, params?: object) => {
  router.push(path as any, params); // Or use 'as unknown as RelativePathString'
};

/**
 * Replace current screen with a new one
 */
export const replace = (path: string, params?: object) => {
  router.replace(path as any, params);
};
/**
 * Go back to the previous screen
 */
export const goBack = () => {
  router.back();
};

/**
 * Reset navigation to a new route (used for logout or onboarding reset)
 */
export const reset = (path: string, params?: object) => {
  router.replace(path as any, params); // Expo Router does not support full reset yet like RN
};

export default {
  navigate,
  replace,
  goBack,
  reset,
};

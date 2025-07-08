import { useLoginUserMutation } from "@src/redux/api/appauth"; // Adjust path as per your project

export const useAuth = () => {
  const [loginUser, { isLoading, error, data }] = useLoginUserMutation();

  return {
    loginUser,
    isLoading,
    error,
    data,
  };
};

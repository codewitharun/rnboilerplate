// hooks/useAuth.ts
import { useLoginUserMutation } from "@src/redux/api/appauth";
import { updateToken } from "@src/redux/auth";
import {
  getValue,
  removeItem,
  storeValue,
} from "@src/services/storageServices";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [loginUserApi, { isLoading, error, data }] = useLoginUserMutation();

  const login = async (email: string, password: string) => {
    try {
      const response = await loginUserApi({ email, password }).unwrap();
      await storeValue("token", response.token);

      dispatch(updateToken(response.token));

      return response;
    } catch (err) {
      console.error("Login failed:", err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await removeItem("token");
      dispatch(updateToken(""));
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const getToken = async (): Promise<string | null> => {
    try {
      const token = await getValue("token");
      return token;
    } catch (err) {
      console.error("Error fetching token:", err);
      return null;
    }
  };

  return {
    login,
    logout,
    getToken,
    isLoading,
    error,
    data,
  };
};

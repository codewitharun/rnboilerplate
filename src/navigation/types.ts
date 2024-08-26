// types.ts
export type RootStackParamList = {
  LoginWithVerification: undefined;
  OtpVerification: {
    credentials?: string | number;
    mode?: string;
    verifyCredentials?: (code: string) => void;
  };
};

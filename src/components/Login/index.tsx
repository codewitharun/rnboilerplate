import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import UserNameSocial from './loginEmailPassword';
import LoginWithPin from './LoginWIthPin/LoginWithPin';
// import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import LoginWithVerification from './LoginWithVerification/LoginWithVerification';
import OtpVerification from './LoginWithVerification/OtpVerification';
import SSOLogin from './SSOLogiin/SSOLogin';
import LoginWithPasswordandSocial from './Loginwithpassword+Social/LoginWithPasswordandSocial';
import Usernameandpassword from './UsernameandPassword/usernameandpassword';
import LoginWithAuth from './LoginWithAuth/LoginWithAuth';
// import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import {appleAuth} from '@invertase/react-native-apple-authentication';

// GoogleSignin.configure({
//   webClientId:
//     '359351884867-5afketk42as9u9j64dm4u7gl2euk9fdl.apps.googleusercontent.com',
// });
interface AppProps {}

const LoginAuth: React.FC<AppProps> = ({}) => {
  const [mode, setMode] = useState<string>('Email ID');
  // Mobile Number or Email ID
  const [loginType, setLoginType] = useState(1);
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function onGoogleButtonPress() {
    try {
      setLoading(true);
      // await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // const {idToken} = await GoogleSignin.signIn();
      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // setLoading(false);
      // return auth().signInWithCredential(googleCredential);
    } catch (error) {
      setLoading(false);
      console.log('🚀 ~ onGoogleButtonPress ~ error:', error);
    }
  }

  async function onFacebookButtonPress() {
    try {
      setLoading(true);
      // await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // const {idToken} = await GoogleSignin.signIn();
      // const googleCredential = auth.FacebookAuthProvider.credential(idToken);
      // setLoading(false);
      // return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log('🚀 ~ onFacebookButtonPress ~ error:', error);
      setLoading(false);
    }
  }

  async function onMicrosoftButtonPress() {
    try {
      setLoading(true);
      // const provider = new auth.OAuthProvider('microsoft.com');
      // setLoading(false);
      // return auth().signInWithRedirect(provider);
    } catch (error) {
      setLoading(false);
      console.log('🚀 ~ onMicrosoftButtonPress ~ error:', error);
    }
  }

  async function onAppleButtonPress() {
    try {
      setLoading(true);
      // const appleAuthRequestResponse = await appleAuth.performRequest({
      //   requestedOperation: appleAuth.Operation.LOGIN,
      //   requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      // });
      // if (!appleAuthRequestResponse.identityToken) {
      //   throw new Error('Apple Sign-In failed - no identify token returned');
      // }
      // const {identityToken, nonce} = appleAuthRequestResponse;
      // const appleCredential = auth.AppleAuthProvider.credential(
      //   identityToken,
      //   nonce,
      // );
      // setLoading(false);
      // return auth().signInWithCredential(appleCredential);
    } catch (error) {
      setLoading(false);
      console.log('🚀 ~ onMicrosoftButtonPress ~ error:', error);
    }
  }

  async function onGithubButtonPress() {
    try {
      setLoading(true);
      Alert.alert('github login');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('🚀 ~ onGithubButtonPress ~ error:', error);
    }
  }

  const onSubmit = async (credentials?: any) => {
    try {
      setLoading(true);
      if (mode === 'Mobile Number' && loginType === 3) {
        console.log('credentials onSubmit', credentials);
        setLoading(false);
        // return await auth().signInWithPhoneNumber(credentials);
      } else if (mode === 'Email ID' && loginType === 3) {
        setLoading(false);
        // return await auth().sendSignInLinkToEmail(userName);
      } else {
        setLoading(false);
        // return await auth().signInWithEmailAndPassword(userName, password);
      }
    } catch (error) {
      setLoading(false);
      console.error('Error during login:', error);
    }
  };

  const forgotPassword = async () => {
    try {
      setLoading(true);
      setLoading(false);
      // return await auth().sendPasswordResetEmail(userName);
    } catch (error) {
      setLoading(false);
      console.error('Error during login:', error);
    }
  };

  const renderLogin = () => {
    if (loginType === 1) {
      return (
        <UserNameSocial
          userName={userName}
          password={password}
          setPassword={setPassword}
          setUsername={setUsername}
          loading={loading}
          onSubmit={onSubmit}
          googleLogin={onGoogleButtonPress}
          facebookLogin={onFacebookButtonPress}
          forgotPassword={forgotPassword}
        />
      );
    } else if (loginType === 2) {
      return <LoginWithPin onSubmit={onSubmit} />;
    } else if (loginType === 3) {
      return (
        <LoginWithVerification
          onSubmit={onSubmit}
          mode={mode}
          userName={userName}
          setUsername={setUsername}
          loading={loading}
        />
      );
    } else if (loginType === 4) {
      return (
        <SSOLogin microsoftLogin={onMicrosoftButtonPress} loading={loading} />
      );
    } else if (loginType === 5) {
      return (
        <LoginWithPasswordandSocial
          userName={userName}
          password={password}
          setPassword={setPassword}
          setUsername={setUsername}
          loading={loading}
          onSubmit={onSubmit}
          googleLogin={onGoogleButtonPress}
          facebookLogin={onFacebookButtonPress}
          forgotPassword={forgotPassword}
          appleLogin={onAppleButtonPress}
        />
      );
    } else if (loginType === 6) {
      return (
        <Usernameandpassword
          userName={userName}
          password={password}
          setPassword={setPassword}
          setUsername={setUsername}
          onSubmit={onSubmit}
          loading={loading}
          forgotPassword={forgotPassword}
        />
      );
    } else if (loginType === 7) {
      return (
        <LoginWithAuth
          onSubmit={onSubmit}
          forgotPassword={forgotPassword}
          userName={userName}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          loading={loading}
          githubLogin={onGithubButtonPress}
          googleLogin={onGoogleButtonPress}
        />
      );
    } else {
      return (
        <UserNameSocial
          userName={userName}
          password={password}
          setPassword={setPassword}
          setUsername={setUsername}
          loading={loading}
          onSubmit={onSubmit}
          forgotPassword={forgotPassword}
          facebookLogin={onFacebookButtonPress}
          googleLogin={onGoogleButtonPress}
        />
      );
    }
  };

  return <View>{renderLogin()}</View>;
};

export default LoginAuth;

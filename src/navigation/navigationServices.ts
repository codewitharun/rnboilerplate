import { CommonActions, StackActions } from "@react-navigation/native";
let _navigator: any;
function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}
function navigate(routeName: string, params: any = {}) {
  _navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}
function reset(routeName: string, params: any) {
  _navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: routeName }],
    }),
  );
}
export default {
  navigate,
  setTopLevelNavigator,
  reset,
};

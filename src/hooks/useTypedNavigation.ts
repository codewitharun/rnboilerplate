import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@src/navigation/types";

export const useAppNavigation = () =>
  useNavigation<NavigationProp<RootStackParamList>>();

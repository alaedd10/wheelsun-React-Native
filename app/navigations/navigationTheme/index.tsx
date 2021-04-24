import { DefaultTheme } from "@react-navigation/native";
import { color } from "react-native-reanimated";
import colors from "../../constants/Colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
    border: colors.medium,
  },
};

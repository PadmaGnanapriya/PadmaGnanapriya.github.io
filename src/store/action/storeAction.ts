import {CHANGE_MODE} from "../../types/constants";
import {ChangeTheme} from "../../types/storeTypes/StoreTypes";

export const setDarkTheme = (isDark: boolean): ChangeTheme => ({
  type: CHANGE_MODE,
  payload: isDark
})

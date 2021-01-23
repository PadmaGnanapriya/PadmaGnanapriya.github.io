import {CHANGE_MODE, CHANGE_VIEW_Y_POSITION} from "../../types/constants";
import {ChangeTheme, ChangeViewYPosition} from "../../types/storeTypes/StoreTypes";

export const setDarkTheme = (isDark: boolean): ChangeTheme => ({
  type: CHANGE_MODE,
  payload: isDark
})

export const setViewYPosition = (viewYPosition: number): ChangeViewYPosition => ({
  type: CHANGE_VIEW_Y_POSITION,
  payload: viewYPosition
})

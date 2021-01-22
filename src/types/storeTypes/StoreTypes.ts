import {CHANGE_MODE} from "../constants";

export interface ChangeTheme {
  type: typeof CHANGE_MODE;
  payload: boolean;
}


export type StoreActionTypes = ChangeTheme;

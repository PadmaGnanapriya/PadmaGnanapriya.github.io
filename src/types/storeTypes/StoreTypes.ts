import {CHANGE_MODE, CHANGE_VIEW_Y_POSITION} from "../constants";

export interface ChangeTheme {
  type: typeof CHANGE_MODE;
  payload: boolean;
}



export interface ChangeViewYPosition {
  type: typeof CHANGE_VIEW_Y_POSITION;
  payload: number;
}


export type StoreActionTypes = ChangeTheme | ChangeViewYPosition;

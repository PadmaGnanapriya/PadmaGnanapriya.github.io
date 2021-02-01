import {StoreActionTypes} from "../../types/storeTypes/StoreTypes";
import {CHANGE_MODE, CHANGE_VIEW_Y_POSITION} from "../../types/constants";

type StoreState = {
  isDark: boolean;
  viewYPosition: number;
}

const initialState: StoreState = {
  isDark: true,
  viewYPosition: 0,
}

export const myReducer =
  (state: StoreState = initialState, action: StoreActionTypes): StoreState => {
    switch (action.type) {
      case CHANGE_MODE:
        return {
          ...state, isDark: action.payload
        };
      case CHANGE_VIEW_Y_POSITION:
        return {...state, viewYPosition: action.payload};
      default:
        return state;
    }
  }
export type RootState = ReturnType<typeof myReducer>;


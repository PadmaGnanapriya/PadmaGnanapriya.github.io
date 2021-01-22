import {applyMiddleware, createStore} from "redux";
// import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import {myReducer} from "./reducer/myReducer";
import {compose} from "redux";

const STORE_STORAGE = 'Padme';

export const configureStore = (preloadedState?: any) => {
  // let persistedState = {};

  const localStoreState = localStorage.getItem(STORE_STORAGE);
  let persistedState;
  if (localStoreState) {
    persistedState = JSON.parse(localStoreState);
  }

  //Todo: Change Store in productions. DevTools only for development.
  // const store = createStore(myReducer, persistedState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
  const store = createStore(myReducer, persistedState, compose(applyMiddleware(thunkMiddleware))); //production

  store.subscribe(() => {
    localStorage.setItem(STORE_STORAGE, JSON.stringify(store.getState()));
  });

  return store;
};

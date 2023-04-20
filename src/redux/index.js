import { combineReducers, configureStore } from "@reduxjs/toolkit";

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === 'Clear') {
    state = undefined;
  }

  return appReducer(state, action);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: [],
  enhancers: [],
})
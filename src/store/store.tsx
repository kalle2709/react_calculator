
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculatorSlice';

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;

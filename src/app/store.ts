// npm i redux @types/redux
import {  combineReducers, legacy_createStore } from 'redux';
import amountReducer from '../features/amount';
import goodsReducer from '../features/goods';
import positionReducer from '../features/position';
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  amount: amountReducer,
  goods: goodsReducer,
  position: positionReducer,
});

export const store = legacy_createStore(reducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;

export default store;

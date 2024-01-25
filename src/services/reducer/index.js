import { combineReducers } from 'redux'
import {ProductReducer} from "./product.reducer"
import { userReducer } from './authReducer';

export const rootReducer = combineReducers({
    ProductReducer,
    userReducer
  });
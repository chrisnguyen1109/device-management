import { combineReducers, createStore } from '@/libs';
import { authReducer } from './authSlice';
import { deviceReducer } from './deviceSlice';
import { modalReducer } from './modalSlice';

export const { attach, connect, dispatch, render } = createStore(
    combineReducers({
        auth: authReducer,
        device: deviceReducer,
        modal: modalReducer,
    })
);

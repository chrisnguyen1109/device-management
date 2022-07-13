import { STORAGE_AUTH } from '@/config';
import { Reducer } from '@/types';
import { AuthAction, AuthState, AuthType } from './types';

const initialState: AuthState = {
    currentAuth: localStorage.getItem(STORAGE_AUTH) === 'true',
};

export const authReducer: Reducer<AuthState, AuthAction> = (
    state = initialState,
    action
) => {
    switch (action?.type) {
        case AuthType.LOGIN: {
            state.currentAuth = true;
            localStorage.setItem(STORAGE_AUTH, 'true');

            break;
        }
        case AuthType.LOGOUT: {
            state.currentAuth = false;
            localStorage.removeItem(STORAGE_AUTH);

            break;
        }
    }

    return state;
};

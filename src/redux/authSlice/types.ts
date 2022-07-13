export enum AuthType {
    LOGIN = 'login',
    LOGOUT = 'logout',
}

export interface AuthLogin {
    type: AuthType.LOGIN;
    payload: undefined;
}

export interface AuthLogout {
    type: AuthType.LOGOUT;
    payload: undefined;
}

export type AuthAction = AuthLogin | AuthLogout;

export interface AuthState {
    currentAuth: boolean;
}

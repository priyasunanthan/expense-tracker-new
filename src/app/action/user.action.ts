import { Action } from '@ngrx/store';
console.log('User actions...');

// User Login Action
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export class UserLogin implements Action {
    readonly type = USER_LOGIN;
    constructor(public payload: any) { }
}
export class UserLoginSuccess implements Action {
    readonly type = USER_LOGIN_SUCCESS;
    constructor(public payload: any) { }
}
export class UserLoginFailed implements Action {
    readonly type = USER_LOGIN_FAILED;
    constructor(public payload: any) { }
}

// User Confirmation Action
export const USER_CONF = 'USER_CONF';
export const USER_CONF_SUCCESS = 'USER_CONF_SUCCESS';
export const USER_CONF_FAILED = 'USER_CONF_FAILED';

export class UserConfirmation implements Action {
    readonly type = USER_CONF;
    constructor(public payload: any) { }
}
export class UserConfirmationSuccess implements Action {
    readonly type = USER_CONF_SUCCESS;
    constructor(public payload: any) { }
}
export class UserConfirmationFailed implements Action {
    readonly type = USER_CONF_FAILED;
    constructor(public payload: any) { }
}

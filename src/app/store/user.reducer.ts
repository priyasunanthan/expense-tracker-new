import * as userActions from './../action/user.action';

export interface UserState {
    userAuthor: string;
}

export const USER_INIT_STATE: UserState = {
    userAuthor: 'Priya',
};

export function userReducer(state = USER_INIT_STATE, action) {
    console.log('Inside userReducer, Received Action ==>> ', action);
    console.log('user state = ', state);

    switch (action.type) {
        // User Login Cases
        case userActions.USER_LOGIN:
            console.log('userActions.USER_LOGIN, payload = ', action.payload);
            // return Object.assign({}, state);
            return state;
        case userActions.USER_LOGIN_SUCCESS:
            console.log('userActions.USER_LOGIN_SUCCESS, payload = ', action.payload);
            // return Object.assign({}, state);
            return state;
        case userActions.USER_LOGIN_FAILED:
            console.log('userActions.USER_LOGIN_FAILED, payload = ', action.payload);
            // return Object.assign({}, state);
            return state;

        // User Confirmationtion Cases
        case userActions.USER_CONF:
            console.log('userActions.USER_CONF, payload = ', action.payload);
            // return Object.assign({}, state);
            return state;
        case userActions.USER_CONF_SUCCESS:
            console.log('userActions.USER_CONF_SUCCESS, payload = ', action.payload);
            // return Object.assign({}, state);
            return state;
        case userActions.USER_CONF_FAILED:
            console.log('userActions.USER_CONF_FAILED, payload = ', action.payload);
            // return Object.assign({}, state);
            return state;

        default: return state;
    }

}

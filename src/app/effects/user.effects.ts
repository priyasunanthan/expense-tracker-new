import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as userActions from './../action/user.action';
import { UserService } from './../services/user.service';

@Injectable()
export class UserEffects {
    constructor(private action: Actions, private userService: UserService) {
        console.log('Inside UserEffects constructor...');
    }

    @Effect()
    userLogin: Observable<any> = this.action.pipe(
        ofType(userActions.USER_LOGIN),
        switchMap((actionObject) => {
            return this.userService.userLoginService(actionObject).pipe(map((resp) => {
                console.log('---------------------- response in userLogin effects ----------', resp);
                return (resp.status === 'error') ?
                    new userActions.UserLoginFailed({ message: '...resp.data...', status: 'Error' })
                    : new userActions.UserLoginSuccess(resp.data);
            }), catchError((err) => of(new userActions.UserLoginFailed({ message: err, status: 'Server Error' }))));
        })
    );

    @Effect()
    userConfirmation: Observable<any> = this.action.pipe(
        ofType(userActions.USER_CONF),
        switchMap((actionObject) => {
            return this.userService.userLoginService(actionObject).pipe(map((resp) => {
                console.log('---------------------- response in in userConfirmation effects ----------', resp);
                return (resp.status === 'error') ?
                    new userActions.UserConfirmationFailed({ message: '...resp.data...', status: 'Error' })
                    : new userActions.UserConfirmationSuccess(resp.data);
            }), catchError((err) => of(new userActions.UserConfirmationFailed({ message: err, status: 'Server Error' }))));
        })
    );

}

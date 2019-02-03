import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userLoginService(payload: any): Observable<any> {
    return this.http.get('assets/mocks/usermocks.json')
      .pipe(map((resp) => {
        console.log('Getting response --- ', resp);
        return resp;
      }), catchError(this.handleError));
  }

  // Handle Error
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class AuthenticateService {

  loginString = "http://puzzle.digitalrep.com.au/login";
  registerString = "http://puzzle.digitalrep.com.au/register";
  refreshString = "http://puzzle.digitalrep.com.au/refresh";

  constructor(private http: HttpClient) { }

  validateUserToken() {

  }

  validate(user: User, isRegistering: boolean) {
    if(isRegistering) {
      if(user.name.length < 3) {
        return false;
      }
    }
    if(user.email.length > 6 && user.password.length > 6) {
      var regexp = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
      return regexp.test(user.email);
    } else {
      return false;
    }
  }

  login(user: User): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
    let params = new HttpParams({ fromObject: {"email": user.email, "password": user.password }});
    return this.http.post<any>(this.loginString, params, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  register(user: User): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        //'Authorization': 'my-auth-token'
      })
    };
    let params = new HttpParams({ fromObject: {"name": user.name, "email": user.email, "password": user.password }});
    return this.http.post<any>(this.registerString, params, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  verify(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': 'Bearer: ' + localStorage.getItem('token')
      })
    };
    return this.http.get<any>(this.refreshString, httpOptions)
    .pipe(
      catchError(this.handleError)
    );    
  }

  logout() {

  }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error("An error occurred: ", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    return new ErrorObservable("Error occurred. Please try again later.");
  }

}

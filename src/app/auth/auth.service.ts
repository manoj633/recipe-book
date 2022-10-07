import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { User } from "./user.model";

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    user$ = new BehaviorSubject<User>(null);
    private tokenExpirationTime: any;

    constructor(private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=api_key', {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(
            resData => {
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
            }
        ));
    };

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=api_key', {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(
            resData => {
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
            }
        ));
    };

    logout() {
        this.user$.next(null);
        localStorage.removeItem('userData');

        if (this.tokenExpirationTime) {
            clearTimeout(this.tokenExpirationTime);
        }
        this.tokenExpirationTime = null;
    }

    autoLogin() {
        const userData: { email: string, id: string, _token: string, _tokenExpirationDate: string } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        if (!loadedUser.token) {
            this.user$.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

    autoLogout(expirationDuration: number) {
        this.tokenExpirationTime = setTimeout(() => {
            this.logout();
        }, expirationDuration * 1000);
    }

    private handleAuthentication(email: string, Id: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const userData = new User(email, Id, token, expirationDate);
        this.user$.next(userData);
        this.autoLogout(expiresIn);
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error has occured!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_NOT_FOUND': { errorMessage = 'Email not found'; break }
            case 'INVALID_PASSWORD': { errorMessage = 'Invalid password! Please try again'; break }
            case 'USER_DISABLED': { errorMessage = 'The user account has been disabled'; break }
            case 'EMAIL_EXISTS': { errorMessage = 'This mail already exists'; break }
            case 'TOO_MANY_ATTEMPTS_TRY_LATER': errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.'
        }
        return throwError(errorMessage);
    }
}
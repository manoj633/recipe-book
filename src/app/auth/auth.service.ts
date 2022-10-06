import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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

    constructor(private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=api_key', {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError));
    };

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=api_key', {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError));
    };

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
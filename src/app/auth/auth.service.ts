import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=api_key', {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(errorRes => {
            let errorMessage = 'An unknown error has occured!';
            if (!errorRes.error || !errorRes.error.error) {
                return throwError(errorMessage);
            }
            switch (errorRes.error.error.message) {
                case 'EMAIL_EXISTS': { errorMessage = 'This mail already exists'; break }
                case 'TOO_MANY_ATTEMPTS_TRY_LATER': errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.'
            }
            return throwError(errorMessage);
        }));
    };
}
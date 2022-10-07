import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'

})
export class AuthComponent {

    constructor(private authService: AuthService, private router: Router) { }

    isLoginMode = true;
    isLoading = false;
    error?: string;

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.isLoading = true;
        if (this.isLoginMode) {
            this.authService.login(email, password).subscribe(resData => {
                this.isLoading = false;
                this.router.navigate(['/recipes']);
            }, error => {
                console.log(error);
                this.error = error;
                this.isLoading = false;
            });

        } else {
            this.authService.signUp(email, password).subscribe(resData => {
                this.isLoading = false;
                this.router.navigate(['/recipes']);
            }, error => {
                console.log(error);
                this.error = error;
                this.isLoading = false;
            });
        }
        form.reset();
    }


}
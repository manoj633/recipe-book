import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take, tap } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.user$.pipe(map(user => {
            console.log(route);
            let isAuth = !!user;
            if (route.routeConfig.path === 'auth') {
                if (isAuth) return this.router.createUrlTree(['/recipes']);
                return true;
            }
            if (isAuth) return true;
            return this.router.createUrlTree(['/auth']);
        }))
    }
}
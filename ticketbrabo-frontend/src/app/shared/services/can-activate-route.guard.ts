import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class CanActivateRouteGuard implements CanActivate {
    
    constructor(private authService: AuthenticationService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.authService.isAccessTokenExpired(localStorage.getItem("authToken"))){
            this.router.navigate(["/"]);
        }
        return true;
    }

}
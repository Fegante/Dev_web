import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable()
export class AuthenticationService {

    jwtHelper: JwtHelperService = new JwtHelperService();
    constructor(){
        
    }

    isAccessTokenExpired(token: string | null) {
        return !token && this.jwtHelper.isTokenExpired(token as string);
    }

    getUserByToken() {
        const token = this.getTokenFromLocalStorage();
        return token ? this.jwtHelper.decodeToken(token) : null;
    }

    isTokeNotNull() {
        return this.getTokenFromLocalStorage() != null && this.getTokenFromLocalStorage() != '';
    }

    getTokenFromLocalStorage() {
        return localStorage.getItem("authToken");
    }
    
}
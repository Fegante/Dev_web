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
}
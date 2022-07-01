import { Injectable, OnInit } from "@angular/core";
import { ObservableModel } from "../models/observable.model";
import { UserModel } from "../models/user.model";
import { AuthenticationService } from "./authentication.service";

@Injectable({providedIn: 'root'})
export class AuthNotificationService extends ObservableModel {
    private _user!: UserModel | null;

    constructor(private authenticationService: AuthenticationService) {
        super();
        if(this.authenticationService.isTokeNotNull()) {
            this.user = this.authenticationService.getUserByToken();
        }
    }
   
    public get user() {
        return this._user;
    }

    public set user(user: UserModel | null) {
        this._user = user;
        this.notifyObservers();
    }

}
import { Injectable } from "@angular/core";
import { ObservableModel } from "../models/observable.model";
import { UserModel } from "../models/user.model";


@Injectable({providedIn: 'root'})
export class LoggedUserService extends ObservableModel {
    
    private _isUserAuth = false;
    private _user!: UserModel;

    public get isUserAuth() {
        return this._isUserAuth;
    }
    public set isUserAuth(value) {
        this._isUserAuth = value;

        this.notifyObservers();
    }

    public get user() {
        return this._user;
    }

    public set user(user: UserModel) {
        this._user = user;
        this.notifyObservers();
    }

    public set userAuth(auth: boolean) {
        this._user.isAuth = auth;
        this.notifyObservers();
    }
}
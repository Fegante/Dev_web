import { Injectable } from "@angular/core";
import { ObservableModel } from "../models/observable.model";
import { UserModel } from "../models/user.model";

@Injectable({providedIn: 'root'})
export class AuthNotificationService extends ObservableModel {
    private _user!: UserModel | null;
   
    public get user() {
        return this._user;
    }

    public set user(user: UserModel | null) {
        this._user = user;
        this.notifyObservers();
    }

}
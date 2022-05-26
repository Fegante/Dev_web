import { Injectable } from "@angular/core";
import { ObservableModel } from "../models/observable.model";


@Injectable({providedIn: 'root'})
export class LoggedUserService extends ObservableModel {
    
    private _isUserAuth = false;

    public get isUserAuth() {
        return this._isUserAuth;
    }
    public set isUserAuth(value) {
        this._isUserAuth = value;

        this.notifyObservers();
    }

}
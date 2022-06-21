import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class MenuLoggedService {
    _clickedToLogin = new EventEmitter<boolean>();

    emitClickedToLogin() {
        this._clickedToLogin.emit(true);
    }

    get clickedToLogin(): EventEmitter<boolean> {
        return this._clickedToLogin;
    }
}
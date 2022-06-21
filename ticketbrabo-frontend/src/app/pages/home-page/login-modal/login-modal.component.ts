import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MenuLoggedService } from "src/app/shared/components/menu-logged/menu-logged.service";

@Component({
    selector: "homepage-login-modal",
    templateUrl: "./login-modal.component.html",
    styleUrls: ["login-modal.component.css"]
})
export class LoginModalComponent {

    @Output()
    emitCloseLoginModal = new EventEmitter<boolean>();

    constructor() {

    }

    clickToCloseLoginModal() {
        this.emitCloseLoginModal.emit(false);
    }
 }
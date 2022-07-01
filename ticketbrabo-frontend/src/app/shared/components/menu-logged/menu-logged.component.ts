import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserModel } from "../../models/user.model";
import { AuthNotificationService } from "../../services/auth-notification.service";
import { MessageService } from "../../services/message.service";
import { MenuLoggedService } from "./menu-logged.service";


@Component({
    selector: "app-menulogged",
    templateUrl: "./menu-logged.component.html",
    styleUrls: ["./menu-logged.component.css"]
})

export class MenuLoggedComponent implements OnInit, OnDestroy{
    
    public user!: UserModel | null;
    private subscription: any;
    constructor(
        private authNotificationService: AuthNotificationService,
        private router: Router,
        private messageService: MessageService,
        private menuLoggedService: MenuLoggedService){
    }

    onClickToSignIn() {
        this.menuLoggedService.emitClickedToLogin();
    }

    onClickToLogout() {
        localStorage.setItem("authToken", "");
        this.router.navigate(["/"]);
        this.authNotificationService.user = null;
        this.messageService.registerMessage("Deslogado com sucesso!");
    }

    ngOnInit(): void {
        this.user = this.authNotificationService.user;
        this.subscription = this.authNotificationService.addObserver(({user}: any) => {
            this.user = user;
        });
    }

    ngOnDestroy(): void {
        this.authNotificationService.removeObserver(this.subscription);
    }
}
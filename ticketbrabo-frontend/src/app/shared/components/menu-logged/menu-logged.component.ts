import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserModel } from "../../models/user.model";
import { AuthNotificationService } from "../../services/auth-notification.service";


@Component({
    selector: "app-menulogged",
    templateUrl: "./menu-logged.component.html",
    styleUrls: ["./menu-logged.component.css"]
})

export class MenuLoggedComponent implements OnInit, OnDestroy{
    
    public user!: UserModel;
    private subscription: any;
    constructor(private authNotificationService: AuthNotificationService){
    }

    ngOnInit(): void {
        this.subscription = this.authNotificationService.addObserver(({user}: any) => {
            this.user = user;
        });
    }

    ngOnDestroy(): void {
        this.authNotificationService.removeObserver(this.subscription);
    }
}
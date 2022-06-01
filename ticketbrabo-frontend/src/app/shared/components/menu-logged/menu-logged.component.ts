import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserModel } from "../../models/user.model";
import { LoggedUserService } from "../../services/logged-user.service";


@Component({
    selector: "app-menulogged",
    templateUrl: "./menu-logged.component.html",
    styleUrls: ["./menu-logged.component.css"]
})

export class MenuLoggedComponent implements OnInit, OnDestroy{
    
    public user!: UserModel;
    private subscription: any;
    constructor(private loggedService: LoggedUserService){
    }

    ngOnInit(): void {
        this.subscription = this.loggedService.addObserver(({user}: any) => {
            this.user = user;
            console.log(user);
        });
    }

    ngOnDestroy(): void {
        this.loggedService.removeObserver(this.subscription);
    }
}
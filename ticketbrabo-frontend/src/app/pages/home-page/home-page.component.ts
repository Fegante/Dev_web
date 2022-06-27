import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MenuLoggedService } from "src/app/shared/components/menu-logged/menu-logged.service";
import { AuthNotificationService } from "src/app/shared/services/auth-notification.service";

@Component({
    selector: 'app-homepage',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy{

    showLoginComponent = true;
    private subscriptionClickLogin: Subscription;

    constructor(
        private authNotificationService: AuthNotificationService,
        private menuLoggedService: MenuLoggedService){

        this.subscriptionClickLogin = this.menuLoggedService.clickedToLogin.subscribe((isOpen: boolean) => {
                this.showLoginComponent = isOpen;
            });

    }

    openLoginModal(){
        this.showLoginComponent = this.authNotificationService.user == null;
    }
    emitCloseLoginModal(keepOpen: boolean) {
        this.showLoginComponent = keepOpen;
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.subscriptionClickLogin.unsubscribe();
    }

}
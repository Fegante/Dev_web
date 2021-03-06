import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomePageRoutingModule } from "./home-page-routing.module";
import { HomePageComponent } from "./home-page.component";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { LoginModalComponent } from "./login-modal/login-modal.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        HomePageComponent,
        LoginModalComponent
    ],
    imports: [
        CommonModule, 
        RouterModule,
        HomePageRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule
    ],
})
export class HomePageModule { }
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomePageRoutingModule } from "./home-page-routing.module";
import { HomePageComponent } from "./home-page.component";
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [HomePageComponent],
    imports: [
        CommonModule, 
        RouterModule,
        HomePageRoutingModule,
        MatCardModule
    ],
})
export class HomePageModule { }
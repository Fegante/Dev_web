import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CardcoloredComponent } from "./components/cardcolored/cardcolored.component";
import { ListCardComponent } from "./components/list-card/list-card.component";
import { SearchInputComponent } from "./components/search-input/search-input.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MenuLoggedComponent } from "./components/menu-logged/menu-logged.component";


@NgModule({
    declarations: [
        SidebarComponent,
        CardcoloredComponent,
        SearchInputComponent,
        ListCardComponent,
        MenuLoggedComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    exports: [
        SidebarComponent,
        CardcoloredComponent,
        SearchInputComponent,
        ListCardComponent,
        MenuLoggedComponent
    ]
  
})
export class SharedModule { }
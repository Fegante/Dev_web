import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CardcoloredComponent } from "./components/cardcolored/cardcolored.component";
import { SearchInputComponent } from "./components/search-input/search-input.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";


@NgModule({
    declarations: [
        SidebarComponent,
        CardcoloredComponent,
        SearchInputComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        SidebarComponent,
        CardcoloredComponent,
        SearchInputComponent
    ]
  
})
export class SharedModule { }
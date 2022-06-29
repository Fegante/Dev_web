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
import { CadastroComponent } from "./pages/cadastro/cadastro.component";
import { CardSimpleComponent } from "./components/card-simple/card-simple.component";
import { GraphBarComponenet } from "./components/graph-bar/graph-bar.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormResourceService } from "./services/form-resource.service";
import { Interceptor } from "./services/interceptor";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MessageSnackbarComponent } from "./components/message-snackbar/message-snackbar.component";
import { MessageService } from "./services/message.service";


@NgModule({
    declarations: [
        SidebarComponent,
        CardcoloredComponent,
        SearchInputComponent,
        ListCardComponent,
        MenuLoggedComponent,
        CadastroComponent,
        CardSimpleComponent,
        GraphBarComponenet,
        MessageSnackbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule
    ],
    providers: [
        FormResourceService,
        Interceptor,
        {
            useClass: Interceptor,
            provide: HTTP_INTERCEPTORS,
            multi: true
        },
        MessageService
    ],
    exports: [
        SidebarComponent,
        CardcoloredComponent,
        SearchInputComponent,
        ListCardComponent,
        MenuLoggedComponent,
        CadastroComponent,
        CardSimpleComponent,
        GraphBarComponenet,
        MessageSnackbarComponent
    ]
  
})
export class SharedModule { }

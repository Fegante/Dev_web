import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.modules";
import { ProdutorRoutingModule } from "./produtor-routing.module";
import { ProdutorComponent } from "./produtor.component";


@NgModule({
    declarations: [
        ProdutorComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProdutorRoutingModule
    ]
})
export class ProdutorModule { }
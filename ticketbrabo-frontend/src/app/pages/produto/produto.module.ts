import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.modules";
import { ProdutoRoutingModule } from "./produto-routing.module";
import { ProdutoComponent } from "./produto.component";


@NgModule({
    declarations: [
        ProdutoComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProdutoRoutingModule
    ]
})
export class ProdutoModule { }
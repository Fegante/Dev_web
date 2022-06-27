import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "src/app/shared/pages/cadastro/cadastro.component";
import { ProdutorResolve } from "./produtor.resolve";

const routes: Routes = [
    { path: 'new', component: CadastroComponent, resolve: {resource: ProdutorResolve} }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProdutorRoutingModule { }
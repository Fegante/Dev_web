import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "src/app/shared/pages/cadastro/cadastro.component";
import { ProdutoResolve } from "./produto.resolve";

const routes: Routes = [
    { path: 'new', component: CadastroComponent, resolve: {resource: ProdutoResolve} },
    { path: ':id', component: CadastroComponent, resolve: {resource: ProdutoResolve} },
    { path: '', redirectTo: '/evento'}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }
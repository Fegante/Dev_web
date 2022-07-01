import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from 'src/app/shared/pages/cadastro/cadastro.component';
import { EstoqueComponent } from './estoque.component';
import { EstoqueResolve } from './estoque.resolve';

const routes: Routes = [
  { path: '', component: EstoqueComponent},
  { path: 'new', component: CadastroComponent, resolve: {resource: EstoqueResolve}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from 'src/app/shared/pages/cadastro/cadastro.component';
import { EventoComponent } from './evento.component';
import { EventoResolve } from './evento.resolve';

const routes: Routes = [
  { path: '', component: EventoComponent},
  { path: 'new', component: CadastroComponent, resolve: {resource: EventoResolve}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }

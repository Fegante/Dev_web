import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'evento', loadChildren: () => import('./pages/evento/evento.module').then(m => m.EventoModule) },
  { path: 'produtor', loadChildren: () => import('./pages/produtor/produtor.module').then(m => m.ProdutorModule) },
  { path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

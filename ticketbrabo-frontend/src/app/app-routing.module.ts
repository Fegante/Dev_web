import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateRouteGuard } from './shared/services/can-activate-route.guard';

const routes: Routes = [
  { path: 'evento', loadChildren: () => import('./pages/evento/evento.module').then(m => m.EventoModule), canActivate: [CanActivateRouteGuard]},
  { path: 'produtor', loadChildren: () => import('./pages/produtor/produtor.module').then(m => m.ProdutorModule) },
  { path: 'estoque', loadChildren: () => import('./pages/estoque/estoque.module').then(m => m.EstoqueModule) },
  { path: 'produto', loadChildren: () => import('./pages/produto/produto.module').then(m => m.ProdutoModule) },
  { path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

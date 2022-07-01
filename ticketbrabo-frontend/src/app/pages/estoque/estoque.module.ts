import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueComponent } from './estoque.component';
import { SharedModule } from 'src/app/shared/shared.modules';


@NgModule({
  declarations: [
    EstoqueComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    SharedModule
  ],
  providers: [
  ]
})
export class EstoqueModule { }

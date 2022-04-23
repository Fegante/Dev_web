import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import { EventoComponent } from './evento.component';
import { SharedModule } from 'src/app/shared/shared.modules';


@NgModule({
  declarations: [
    EventoComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule,
    SharedModule
  ],
  providers: [
  ]
})
export class EventoModule { }

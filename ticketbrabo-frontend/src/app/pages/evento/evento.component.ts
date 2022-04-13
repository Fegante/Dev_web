import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  menuItems!: any[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [{
      class: "iconEvento",
      text: "Eventos",
      iconActive: 'iconEventoActiveIcon',
      textActive: 'iconActive',
      routerLink: '/evento'
    },
    {
      class: "iconProduto",
      text: "Produtos",
    }];
  }

}

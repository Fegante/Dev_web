import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticketbrabo-frontend';

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

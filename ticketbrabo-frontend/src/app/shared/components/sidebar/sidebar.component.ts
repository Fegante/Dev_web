import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ObservableModel } from '../../models/observable.model';
import { ObserverModel } from '../../models/observer.model';
import { LoggedUserService } from '../../services/logged-user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  
  public menuItems!: any[];
  private subscribe !: any;

  notAuth = [
    {
      class: "iconEvento",
      text: "Novidades",
      iconActive: 'iconEventoActiveIcon',
      textActive: 'iconActive',
      routerLink: '/evento'
    },
    {
      class: "iconProduto",
      text: "Produtos",
    }
  ];

  constructor(private loggedService: LoggedUserService) {
  }

  ngOnInit(): void {
    this.subscribe = this.loggedService.addObserver((valor: any) => {
      console.log("notificado");
      if (valor.isUserAuth) {
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
      } else {
        this.menuItems = this.notAuth;
      }
    });
    
    this.menuItems = this.notAuth;
  }


  
  ngOnDestroy(): void {
    console.log("destruido");
    this.loggedService.removeObserver(this.subscribe);
  }
}

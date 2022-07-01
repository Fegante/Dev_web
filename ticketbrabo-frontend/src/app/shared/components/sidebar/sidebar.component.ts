import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthNotificationService } from '../../services/auth-notification.service';
import { menuNotAtuhResource } from './not-auth-menu.resource';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  
  public menuItems!: any[];
  private subscription: any;

  constructor(private authNotificationService: AuthNotificationService) {
  }

  ngOnInit(): void {
    if(this.authNotificationService.user) {
      this.addMenuItems(this.authNotificationService.user);
    }
    
    this.subscription = this.authNotificationService.addObserver(({user}: any) => {
        this.addMenuItems(user);
    });
    
    this.menuItems = menuNotAtuhResource;
  }
  
  ngOnDestroy(): void {
    this.authNotificationService.removeObserver(this.subscription);
  }

  addMenuItems(user: any) {
    if(user) {
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
        textActive: 'iconActive',
        routerLink: '/produto/new'
      },
      {
        class: "iconProduto",
        text: "Estoque Total",
        textActive: 'iconActive',
        routerLink: '/estoque'
      }];
    } else {
      this.menuItems = menuNotAtuhResource;
    }
  }
}

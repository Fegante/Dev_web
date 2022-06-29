import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSettings } from 'src/app/app-settings';
import { CardBackgroundEnum, CardModel, CardSpinnerEnum } from 'src/app/shared/models/card.model';
import { ListCardItemModel } from 'src/app/shared/models/list-card-item.model';
import { AuthNotificationService } from 'src/app/shared/services/auth-notification.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  static DEFAULT_EVENT_IMAGE = "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/NDqPQJMhwVtlR3l01MKEuBebpQGpp8vXuzI8od7m.jpeg";

  cards: any[] = [];
  events: any[] = [];

  constructor (
    private activedRoute: ActivatedRoute,
    private authNotificationService: AuthNotificationService,
    private http: HttpClient) { 
    
    }

  ngOnInit(): void {
    this.authNotificationService.user = {
      nome: 'Ezequiel',
      role: 'Produtor',
      isAuth: true,
      token: "###DDD"
    };

    this.getEstoque();
    this.getEvents();
  }

  
  private getEstoque() {
    this.http.get(`${AppSettings.HTTPS}/api/reserva-estoque/query`)
    .subscribe((response: any) => this.tranformReservaEstoques(response.data));
  }

  private tranformReservaEstoques(reservaEstoques: []) {
    this.cards = reservaEstoques.map(this.tranformReservaEstoqueInCardModel);
  }

  private tranformReservaEstoqueInCardModel(reservaEstoque: any, index: number): CardModel {
    const { produto } = reservaEstoque;
    const bgColors = [CardBackgroundEnum.AZUL, CardBackgroundEnum.VERMELHO, CardBackgroundEnum.ROXO_ESCURO];
    const bgSpinnerColor = [CardSpinnerEnum.AZUL, CardSpinnerEnum.VERMELHO, CardSpinnerEnum.VERDE];
    return {
        id: reservaEstoque.id,
        title: produto.categoriaProduto.nome,
        quantityTotal: produto.quantidadeTotal,
        quantity: reservaEstoque.quantidade,
        bgColor: bgColors[index],
        colorSpinnerBg: bgSpinnerColor[index]
     }
    
  }


  private getEvents() {
    this.http.get(`${AppSettings.HTTPS}/api/evento/query`)
    .subscribe((response: any) => this.tranformEvents(response.data));
  }

  private tranformEvents(events: []) {
    if(events) {
      this.events = events.map(this.tranformEventInListCardItem);
    }
  }

  private tranformEventInListCardItem(event: any): ListCardItemModel{
    return {
      id: event.id,
      title: event.nome,
      date: new Date(event.dataHoraFim).toLocaleString(),
      image: EventoComponent.DEFAULT_EVENT_IMAGE,
      info: "Evento"
    };
  }
}

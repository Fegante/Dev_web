import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardFooter } from '@angular/material/card';
import { AppSettings } from 'src/app/app-settings';
import { CardBackgroundEnum, CardModel, CardSpinnerEnum } from 'src/app/shared/models/card.model';
import { ListCardItemModel } from 'src/app/shared/models/list-card-item.model';
import { AuthNotificationService } from 'src/app/shared/services/auth-notification.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  static DEFAULT_EVENT_IMAGE = "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/NDqPQJMhwVtlR3l01MKEuBebpQGpp8vXuzI8od7m.jpeg";

  cards: any[] = [];
  events: any[] = [];

  constructor (
    private activedRoute: ActivatedRoute,
    private authNotificationService: AuthNotificationService,
    private http: HttpClient) { 
    
    }

  ngOnInit(): void {
    this.getEvents();
  }

  
  private getEstoque(eventoId: number) {
    this.http.get(`${AppSettings.HTTPS}/api/reserva-estoque/evento/${eventoId}`)
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
    this.http.get(`${AppSettings.HTTPS}/api/produto/query`)
    .subscribe((response: any) => this.tranformEvents(response.data));
  }

  private tranformEvents(events: []) {
    if(events) {
      this.events = events.map(this.tranformEventInListCardItem);
    }
  }

  private tranformEventInListCardItem(produto: any): ListCardItemModel{
    return {
      id: produto.id,
      title: produto.categoriaProduto.nome,
      date: '',
      image: EstoqueComponent.DEFAULT_EVENT_IMAGE,
      info: produto.categoriaProduto.descricao
    };
  }

  onChangedCard(card: any) {
    this.getEstoque(card.id);
  }
}

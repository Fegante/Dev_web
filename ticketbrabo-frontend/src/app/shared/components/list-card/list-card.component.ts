import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  public listCard!: any[];

  constructor() { }

  ngOnInit(): void {
    this.listCard = [];
    this.listCard.push({
      image:"https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/NDqPQJMhwVtlR3l01MKEuBebpQGpp8vXuzI8od7m.jpeg",
      title:"2021 - Music Event",
      date:"10/08/2022 22:00 - 04:00",
      info:"Alguma info a mais"
    });
  }

}

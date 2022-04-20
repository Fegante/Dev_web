import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  public listCard!: any[];
  private activeCardItem: any;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.listCard = [];
    this.listCard.push(
      {
        id: "XDT",
        image: "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/NDqPQJMhwVtlR3l01MKEuBebpQGpp8vXuzI8od7m.jpeg",
        title: "2021 - Music Event",
        date: "10/08/2022 22:00 - 04:00",
        info: "Alguma info a mais"
      },
      {
        id: "XDT",
        image: "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/NDqPQJMhwVtlR3l01MKEuBebpQGpp8vXuzI8od7m.jpeg",
        title: "2021 - Music Event",
        date: "10/08/2022 22:00 - 04:00",
        info: "Alguma info a mais"
      },
      {
        id: "XDT",
        image: "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/NDqPQJMhwVtlR3l01MKEuBebpQGpp8vXuzI8od7m.jpeg",
        title: "2021 - Music Event",
        date: "10/08/2022 22:00 - 04:00",
        info: "Alguma info a mais"
      },
      {
        id: "XDT",
        image: "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/NDqPQJMhwVtlR3l01MKEuBebpQGpp8vXuzI8od7m.jpeg",
        title: "2021 - Music Event",
        date: "10/08/2022 22:00 - 04:00",
        info: "Alguma info a mais"
      },
      {
        id: "XDT",
        image: "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/NDqPQJMhwVtlR3l01MKEuBebpQGpp8vXuzI8od7m.jpeg",
        title: "2021 - Music Event",
        date: "10/08/2022 22:00 - 04:00",
        info: "Alguma info a mais"
      },
      {
        id: "XDT",
        image: "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/NDqPQJMhwVtlR3l01MKEuBebpQGpp8vXuzI8od7m.jpeg",
        title: "2021 - Music Event",
        date: "10/08/2022 22:00 - 04:00",
        info: "Alguma info a mais"
      },
      {
        id: "XDT",
        image: "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/NDqPQJMhwVtlR3l01MKEuBebpQGpp8vXuzI8od7m.jpeg",
        title: "2021 - Music Event",
        date: "10/08/2022 22:00 - 04:00",
        info: "Alguma info a mais"
      },
      {
        id: "XDT",
        image: "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/NDqPQJMhwVtlR3l01MKEuBebpQGpp8vXuzI8od7m.jpeg",
        title: "2021 - Music Event",
        date: "10/08/2022 22:00 - 04:00",
        info: "Alguma info a mais"
      },
      {
        id: "XDT",
        image: "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/NDqPQJMhwVtlR3l01MKEuBebpQGpp8vXuzI8od7m.jpeg",
        title: "2021 - Music Event",
        date: "10/08/2022 22:00 - 04:00",
        info: "Alguma info a mais"
      },
      {
        id: "XDT",
        image: "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/NDqPQJMhwVtlR3l01MKEuBebpQGpp8vXuzI8od7m.jpeg",
        title: "2021 - Music Event",
        date: "10/08/2022 22:00 - 04:00",
        info: "Alguma info a mais"
      },

    );


  }

  onClickCard(cardId: string, event: any): void {
    const source: any = this.isClickOnCard(event);
    if (!source) return;

    if (this.activeCardItem && this.activeCardItem != event.srcElement) {
      this.toggleClassAndActiveCard(this.activeCardItem, { key: "border", value: "2px solid transparent" });
      this.toggleClassAndActiveCard(source, { key: "border", value: "2px solid var(--hoverColor)" });

      return;
    }

    this.toggleClassAndActiveCard(source, { key: "border", value: "2px solid var(--hoverColor)" });

  }

  toggleClassAndActiveCard(element: any, style: { [key: string]: string }) {
    this.renderer.setStyle(element, style.key, style.value);
    this.activeCardItem = element;
  }

  isClickOnCard(target: any): any {
    return target.path.filter((p: any) => p.classList && p.classList.contains("cardItem"))[0];
  }

}

import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  @Input()
  public listCard!: any[];
  private activeCardItem: any;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
   

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

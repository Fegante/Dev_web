import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit, OnDestroy {

  @Input()
  public listCard!: any[];
  private activeCardItem: any;

  private changeCard = new EventEmitter();
  private subscription!: Subscription;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
   this.subscription = this.changeCard.subscribe((c) => this.onSelectedCard(c));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  toggleClass(newSelectedCard: any) {
    if (this.activeCardItem && this.activeCardItem != newSelectedCard) {
      this.toggleClassAndActiveCard(this.activeCardItem, { key: "border", value: "2px solid transparent" });
      this.toggleClassAndActiveCard(newSelectedCard, { key: "border", value: "2px solid var(--hoverColor)" });
      return;
    }

    this.toggleClassAndActiveCard(newSelectedCard, { key: "border", value: "2px solid var(--hoverColor)" });
  }

  emitCardChange(event: any) {
    const card = this.isClickOnCard(event);
    if(card){
      this.changeCard.emit(card);
    }
  }

  onSelectedCard(card: any) {
    this.toggleClass(card);
  }
}

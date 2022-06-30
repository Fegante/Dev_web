import { AfterContentInit, AfterViewInit, Component, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Directive({selector: 'child-directive'})
class ChildDirective {
}

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild("listCardChild") 
  listCardChild: any;

  @Input()
  public listCard!: any[];
  
  @Input()
  public urlToRedirect!: string;

  @Output()
  changedCard = new EventEmitter();

  private activeCardItem: any;


  private subscription!: Subscription;

  constructor(private renderer: Renderer2, private router: Router) {
  }

  ngOnInit(): void {
   this.subscription = this.changedCard.subscribe((c) => this.getCardHtmlAndToggleClass(c));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.setDefaultCardActived();
  }

  toggleClass(newSelectedCard: any) {
    if (this.activeCardItem && this.activeCardItem != newSelectedCard) {
      this.toggleClassAndActiveCard(this.activeCardItem, { key: "border", value: "2px solid transparent" });
      this.toggleClassAndActiveCard(newSelectedCard, { key: "border", value: "2px solid var(--hoverColor)" });
      return;
    }

    this.toggleClassAndActiveCard(newSelectedCard, { key: "border", value: "2px solid var(--hoverColor)" });
  }

  toggleClassAndActiveCard(element: any, style: { [key: string]: string }) {
    this.renderer.setStyle(element, style.key, style.value);
    this.activeCardItem = element;
  }

  emitCardChange(card: any) {
    if(!this.activeCardItem || this.activeCardItem.id != card.id){
      this.changedCard.emit(card);
    }
  }

  getCardHtmlAndToggleClass(card: any) {
    const cardHTML = this.getElementByCardId(this.listCardChild.nativeElement.children, card.id);
    if(cardHTML.length > 0) {
      this.toggleClass(cardHTML[0]);
    }
  }

  getElementByCardId(children: any[], id: string) {
    return Array.from(children).filter(c => c.id == id);
  }

  setDefaultCardActived() {
    if(this.listCard.length > 0){
      this.emitCardChange(this.listCard[0]);
    }
  }


  clickToEditItem(cardId: string) {
    this.router.navigate([`${this.urlToRedirect}/${cardId}`]);
  }
}
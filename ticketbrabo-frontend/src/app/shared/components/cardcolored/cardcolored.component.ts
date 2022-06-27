import { Component, Inject, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-cardcolored',
  templateUrl: './cardcolored.component.html',
  styleUrls: ['./cardcolored.component.css']
})
export class CardcoloredComponent implements OnInit {

  @Input()
  public cards: any[] = [];
  public color: ThemePalette;
  public mode!: ProgressSpinnerMode;

  @Input()
  public value!: number;

  constructor() { }

  ngOnInit(): void {
    this.color = "primary";
    this.mode = "determinate";   
  }

  calculateQuantityValue(quantity: number, quantityTotal: number) {
    return ((quantity/quantityTotal)*100).toFixed(1);
  }

}

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
    this.cards.push(
      {
        id: "",
        title: "Água 300ml",
        quantity: 35,
        quantityTotal: 100,
        bgColor: "#369FFF"
      },
      {
        id: "",
        title: "Água 300ml",
        quantity: 48,
        quantityTotal: 100,
        bgColor: "#ff3d36"
      },
      {
        id: "",
        title: "Água 300ml",
        quantity: 400,
        quantityTotal: 1000,
        bgColor: "#1fff7d"
      },
      {
        id: "",
        title: "Água 300ml",
        quantity: 400,
        quantityTotal: 1000,
        bgColor: "#1fff7d"
      },
      {
        id: "",
        title: "Água 300ml",
        quantity: 400,
        quantityTotal: 1000,
        bgColor: "#1fff7d"
      },
      {
        id: "",
        title: "Água 300ml",
        quantity: 400,
        quantityTotal: 1000,
        bgColor: "#1fff7d"
      },
    );
  }

}

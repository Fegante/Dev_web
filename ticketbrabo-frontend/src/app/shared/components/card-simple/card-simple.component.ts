import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-card-simple',
    templateUrl: './card-simple.component.html',
    styleUrls: ['./card-simple.component.css']
})

export class CardSimpleComponent {
    @Input()
    public width!: number;

    @Input()
    public height!: number;

    @Input()
    public cards: any[] = [];
    constructor(){
        this.cards.push(
            {
                label: 'Quantidades Vendidos',
                value: 310
            },
            {
                label: 'Quantidades Restantes',
                value: 20
            },
            {
                label: 'Eventos Completados',
                value: 40
            },
            {
                label: 'Eventos Próximos',
                value: 280
            },
        );
    }

}
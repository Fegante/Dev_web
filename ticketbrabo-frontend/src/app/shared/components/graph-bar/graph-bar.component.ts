import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-graph-bar',
    templateUrl: './graph-bar.component.html',
    styleUrls: ['./graph-bar.component.css']
})
export class GraphBarComponenet { 

    @Input()
    public salesPoint: any[] = [];

    public maxQuantitySale: number;

    constructor(){
        this.salesPoint.push(
            {
                label: 'P1',
                quantity: 300
            },
            {
                label: 'P2',
                quantity: 100
            },
            {
                label: 'P3',
                quantity: 94
            },
            {
                label: 'P4',
                quantity: 33
            },
            {
                label: 'P5',
                quantity: 28
            },
        );

        this.maxQuantitySale = this.getSaleMaxQuantity();
    }

    private getSaleMaxQuantity(): number{
        return this.salesPoint.reduce((s1, s2) => s1.quantity > s2.quantity ? s1 : s2).quantity;
    }

    public calculateBarSize(quantity: number): string{
        return ((quantity/this.maxQuantitySale)*150)+'px';
    }

}